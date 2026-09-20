import { connect } from 'cloudflare:sockets';

// Helper function to send email via Gmail SMTP using cloudflare:sockets
async function sendGmailSmtp({ user, pass, to, subject, html, clientName, invoiceId }) {
  const socket = connect(
    { hostname: 'smtp.gmail.com', port: 465 },
    { secureTransport: 'on' }
  );

  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let buffer = '';

  async function readReply() {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\r\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Standard SMTP status code line: 3 digits followed by a space
        if (/^\d{3}\s/.test(line)) {
          const code = parseInt(line.substring(0, 3), 10);
          buffer = lines.slice(i + 1).join('\r\n');
          return { code, text: line };
        }
      }
    }
    return { code: 0, text: buffer };
  }

  async function sendCmd(cmd) {
    await writer.write(encoder.encode(cmd + '\r\n'));
    return await readReply();
  }

  try {
    // 1. Initial 220 greeting
    const greet = await readReply();
    if (greet.code !== 220) {
      throw new Error(`SMTP Greeting error: ${greet.text}`);
    }

    // 2. EHLO
    await sendCmd('EHLO localhost');

    // 3. AUTH LOGIN
    await sendCmd('AUTH LOGIN');
    await sendCmd(btoa(user));
    const authRes = await sendCmd(btoa(pass.replace(/\s+/g, '')));
    if (authRes.code !== 235) {
      throw new Error(`SMTP Auth failed: ${authRes.text}`);
    }

    // 4. MAIL FROM
    await sendCmd(`MAIL FROM:<${user}>`);

    // 5. RCPT TO
    await sendCmd(`RCPT TO:<${to}>`);

    // 6. DATA
    await sendCmd('DATA');

    // 7. Send RFC 2822 payload
    const msgId = `<rec-${Date.now()}-${Math.random().toString(36).substring(2, 8)}@gmail.com>`;
    const payload = [
      `From: "Autonomous Accounts Recovery" <${user}>`,
      `To: "${clientName}" <${to}>`,
      `Subject: ${subject}`,
      `Message-ID: ${msgId}`,
      `Date: ${new Date().toUTCString()}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      '',
      html,
      '.',
    ].join('\r\n');

    const dataRes = await sendCmd(payload);
    await sendCmd('QUIT');

    writer.releaseLock();
    reader.releaseLock();
    socket.close();

    return {
      success: true,
      messageId: msgId,
      response: dataRes.text,
    };
  } catch (err) {
    try {
      writer.releaseLock();
      reader.releaseLock();
      socket.close();
    } catch (_) {}
    throw err;
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers, status: 204 });
  }

  try {
    const body = await request.json();
    const { filename = 'Corporate_Dataset.csv', useCase = 'Revenue Recovery', records = [] } = body;

    if (!records || records.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'No records provided' }),
        { headers, status: 400 }
      );
    }

    const gmailUser = env.GMAIL_USER || 'abhishek.nitj.002@gmail.com';
    const gmailPass = env.GMAIL_APP_PASSWORD || 'basptolxqbnxwqmg';
    const recipientTestEmail = env.RECIPIENT_TEST_EMAIL || 'abhishekmkumar676@gmail.com';

    const batchId = `BATCH-${Date.now()}`;
    let totalAmountVal = 0;
    records.forEach((r) => {
      const amtStr = (r.Amount_Due || r.amount || '0').replace(/[^0-9]/g, '');
      totalAmountVal += parseInt(amtStr, 10) || 0;
    });
    const formattedTotalAmount = `₹${totalAmountVal.toLocaleString('en-IN')}`;

    const dispatchedResults = [];

    // Send emails for each of the records (usually 10 records)
    for (const rec of records) {
      const invoiceId = rec.Invoice_ID || rec.invoiceId || `INV-${Date.now()}`;
      const clientName = rec.Client_Name || rec.clientName || 'Corporate Client';
      const contactPerson = rec.Contact_Person || rec.contactPerson || 'Finance Director';
      const amount = rec.Amount_Due || rec.amount || '₹0';
      const overdueDays = rec.Overdue_Days || rec.overdueDays || '45';
      const status = rec.Status || rec.status || 'Pending';
      const score = rec.Past_Payment_Score || rec.score || '65/100';

      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 20px auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 14px; background: #ffffff; color: #0f172a;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f1f5f9; padding-bottom: 14px; margin-bottom: 18px;">
            <div>
              <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; color: #64748b; text-transform: uppercase;">Cloudflare Autonomous Recovery</span>
              <div style="font-size: 20px; font-weight: 800; color: #0f172a; margin-top: 2px;">Invoice Ref: ${invoiceId}</div>
            </div>
            <div style="text-align: right;">
              <span style="display: inline-block; padding: 6px 12px; background: #fef3c7; color: #92400e; font-size: 11px; font-weight: 700; border-radius: 9999px;">
                ${status} (${overdueDays} Days)
              </span>
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #edf2f7; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
            <table style="width: 100%; font-size: 13px; color: #475569; border-collapse: collapse;">
              <tr>
                <td style="padding: 4px 0;"><strong>Client Entity:</strong> ${clientName}</td>
                <td style="padding: 4px 0; text-align: right;"><strong>Balance Dues:</strong> <span style="font-size: 16px; font-weight: 800; color: #0f172a;">${amount}</span></td>
              </tr>
              <tr>
                <td style="padding: 4px 0;"><strong>Attention:</strong> ${contactPerson}</td>
                <td style="padding: 4px 0; text-align: right;"><strong>Ledger Reliability:</strong> ${score}</td>
              </tr>
            </table>
          </div>

          <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 16px;">
            Dear ${contactPerson},<br><br>
            Our automated enterprise ledger indicates that Invoice <strong>${invoiceId}</strong> for <strong>${amount}</strong> is currently mature by <strong>${overdueDays} days</strong>.
          </p>
          <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 16px;">
            To maintain uninterrupted commercial service delivery and clear cross-entity audit reconciliations, we request authorization of settlement or sharing of the transaction UTR number by return email.
          </p>

          <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
            Dispatched via Cloudflare Full-Stack Edge Worker & Multi-Agent Autonomous Recovery Brain<br>
            Authenticated Sender: ${gmailUser}
          </div>
        </div>
      `;

      try {
        const smtpRes = await sendGmailSmtp({
          user: gmailUser,
          pass: gmailPass,
          to: recipientTestEmail,
          subject: `[AUTONOMOUS NOTICE] Overdue Settlement: ${invoiceId} — ${clientName} (${amount})`,
          html: emailHtml,
          clientName,
          invoiceId,
        });

        dispatchedResults.push({
          invoiceId,
          clientName,
          amount,
          status: 'Dispatched to Sent Folder',
          messageId: smtpRes.messageId,
        });
      } catch (err) {
        console.error(`Error sending email for ${invoiceId}:`, err);
        dispatchedResults.push({
          invoiceId,
          clientName,
          amount,
          status: 'Error: ' + err.message,
          messageId: null,
        });
      }
    }

    // Record into Cloudflare D1 SQL Database if bound
    let d1Saved = false;
    if (env.DB) {
      try {
        await env.DB.prepare(
          `INSERT INTO recovery_batches (id, filename, total_accounts, total_amount, use_case, status) VALUES (?, ?, ?, ?, ?, ?)`
        )
          .bind(batchId, filename, records.length, formattedTotalAmount, useCase, 'Completed')
          .run();

        for (const item of dispatchedResults) {
          const logId = `LOG-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
          await env.DB.prepare(
            `INSERT INTO recovery_audit_logs (id, batch_id, invoice_id, client_name, amount, risk_tier, email_status) VALUES (?, ?, ?, ?, ?, ?, ?)`
          )
            .bind(
              logId,
              batchId,
              item.invoiceId,
              item.clientName,
              item.amount,
              'High/Standard',
              item.status
            )
            .run();
        }
        d1Saved = true;
      } catch (d1Err) {
        console.error('Cloudflare D1 insertion note:', d1Err);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        batchId,
        filename,
        totalAmount: formattedTotalAmount,
        emailsSent: dispatchedResults.filter((r) => r.status.includes('Dispatched')).length,
        totalRecords: records.length,
        recipient: recipientTestEmail,
        d1Saved,
        results: dispatchedResults,
        timestamp: new Date().toLocaleTimeString(),
      }),
      { headers, status: 200 }
    );
  } catch (error) {
    console.error('Cloudflare Worker Pipeline Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { headers, status: 500 }
    );
  }
}
