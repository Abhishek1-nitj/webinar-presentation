from html import escape
from pathlib import Path
import re
import textwrap

from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession
from reportlab.lib import colors
from reportlab.lib.pagesizes import landscape, letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

SPREADSHEET_ID = "1RxaIKuDa36k4x20VExtFYUtVZEzM2X1-B-P6bTkPAjM"
CREDS = Path("Google Sheet jason/google-sheets.service-account.json")
OUT_DIR = Path("output/pdf")
PDF_PATH = OUT_DIR / "master-prompts-one-page-per-item.pdf"
HTML_PATH = OUT_DIR / "master-prompts-copy-buttons.html"
SKIP_TABS = {"Syllabus", "Sheet27"}


def api_session():
    creds = service_account.Credentials.from_service_account_file(
        CREDS, scopes=["https://www.googleapis.com/auth/spreadsheets.readonly"]
    )
    return AuthorizedSession(creds)


def quote_sheet(name):
    return "'" + name.replace("'", "''") + "'!A1:Z30"


def fetch_items():
    session = api_session()
    meta = session.get(
        f"https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}",
        params={"fields": "properties.title,sheets(properties(title))"},
        timeout=30,
    ).json()
    titles = [s["properties"]["title"] for s in meta["sheets"]]
    ranges = [quote_sheet(t) for t in titles]
    resp = session.get(
        f"https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}/values:batchGet",
        params=[("ranges", r) for r in ranges] + [("valueRenderOption", "FORMULA")],
        timeout=60,
    ).json()
    items = []
    for title, vr in zip(titles, resp.get("valueRanges", [])):
        if title in SKIP_TABS:
            continue
        values = vr.get("values", [])
        cells = []
        for row in values:
            cells.extend(str(v).strip() for v in row if str(v).strip())
        if not cells:
            continue
        text = "\n\n".join(cells).strip().strip('"')
        kind = "Formula" if text.startswith("=") else "VBA Code" if "VBA Code" in title or text.startswith("Option Explicit") else "Prompt"
        items.append({"title": title.strip(), "kind": kind, "text": text})
    return meta["properties"]["title"], items


def wrap_line(line, font, size, max_width):
    if not line:
        return [""]
    avg = max(stringWidth("M", font, size), 1)
    width = max(24, int(max_width / avg))
    out = []
    for part in textwrap.wrap(line, width=width, replace_whitespace=False, drop_whitespace=False) or [""]:
        while stringWidth(part, font, size) > max_width and len(part) > 4:
            cut = max(4, int(len(part) * max_width / stringWidth(part, font, size)) - 1)
            out.append(part[:cut])
            part = part[cut:]
        out.append(part)
    return out


def wrapped(text, font, size, max_width):
    lines = []
    for line in text.replace("\r\n", "\n").replace("\r", "\n").split("\n"):
        lines.extend(wrap_line(line, font, size, max_width))
    return lines


def draw_pdf(book_title, items):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    base_w, _ = landscape(letter)
    margin = 42
    c = canvas.Canvas(str(PDF_PATH))
    for idx, item in enumerate(items, 1):
        font, size, leading = "Courier", 7.2, 9.2
        max_width = base_w - margin * 2
        lines = wrapped(item["text"], font, size, max_width - 28)
        page_h = max(612, 148 + len(lines) * leading)
        c.setPageSize((base_w, page_h))
        c.setFillColor(colors.HexColor("#0B0B0D"))
        c.rect(0, 0, base_w, page_h, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 20)
        c.drawString(margin, page_h - 42, item["title"])
        c.setFont("Helvetica", 10)
        c.setFillColor(colors.HexColor("#D4AF37"))
        c.drawRightString(base_w - margin, page_h - 38, f"{item['kind']}  |  {idx}/{len(items)}")
        c.setFillColor(colors.HexColor("#151518"))
        c.roundRect(margin, 58, base_w - margin * 2, page_h - 116, 14, fill=1, stroke=0)
        c.setStrokeColor(colors.HexColor("#3A3422"))
        c.roundRect(margin, 58, base_w - margin * 2, page_h - 116, 14, fill=0, stroke=1)
        text = c.beginText(margin + 14, page_h - 82)
        text.setFont(font, size)
        text.setLeading(leading)
        text.setFillColor(colors.HexColor("#F4F4F5"))
        for line in lines:
            text.textLine(line)
        c.drawText(text)
        c.setFont("Helvetica", 8)
        c.setFillColor(colors.HexColor("#A8A29E"))
        c.drawString(margin, 28, "Selectable text: click inside the block, then use Cmd/Ctrl+A and Cmd/Ctrl+C.")
        c.drawRightString(base_w - margin, 28, book_title)
        c.showPage()
    c.save()


def draw_html(book_title, items):
    cards = []
    for i, item in enumerate(items):
        cards.append(
            f"""<section class="card">
<div class="meta"><h2>{escape(item['title'])}</h2><span>{escape(item['kind'])}</span></div>
<button onclick="copyBlock({i})">Copy</button>
<pre id="block-{i}">{escape(item['text'])}</pre>
</section>"""
        )
    HTML_PATH.write_text(
        f"""<!doctype html><html><head><meta charset="utf-8"><title>{escape(book_title)}</title>
<style>body{{margin:0;background:#080808;color:#fff;font:16px system-ui;padding:32px}}.card{{position:relative;margin:0 auto 28px;max-width:1100px;background:#151518;border:1px solid #3a3422;border-radius:18px;padding:24px}}h1{{text-align:center}}h2{{margin:0;color:#d4af37}}.meta{{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-right:90px}}button{{position:absolute;right:24px;top:24px;background:#d4af37;border:0;border-radius:10px;padding:10px 18px;font-weight:800;cursor:pointer}}pre{{white-space:pre-wrap;word-break:break-word;background:#0b0b0d;border-radius:14px;padding:18px;line-height:1.45;color:#f4f4f5}}</style>
</head><body><h1>{escape(book_title)}</h1>{''.join(cards)}
<script>async function copyBlock(i){{await navigator.clipboard.writeText(document.getElementById('block-'+i).innerText);event.target.textContent='Copied';setTimeout(()=>event.target.textContent='Copy',900)}}</script>
</body></html>""",
        encoding="utf-8",
    )


if __name__ == "__main__":
    title, items = fetch_items()
    draw_pdf(title, items)
    draw_html(title, items)
    print(f"items={len(items)}")
    print(PDF_PATH)
    print(HTML_PATH)
