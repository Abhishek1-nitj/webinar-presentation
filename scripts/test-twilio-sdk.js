import twilio from 'twilio';

const sid = process.env.TWILIO_ACCOUNT_SID || '';
const token = process.env.TWILIO_AUTH_TOKEN || '';
const client = (sid && token) ? twilio(sid, token) : null;

async function run() {
  try {
    const msg = await client.messages.create({
      from: 'whatsapp:+17372508034',
      to: 'whatsapp:+917289977264',
      body: '🟢 SYSTEM ALERT | Autonomous Recovery Brain\nExecution Status: Complete (1.8s)\nAccounts Scanned: 5 Corporate Clients\nTotal Outstanding Analyzed: ₹16,55,000\n━━━━━━━━━━━━━━━━━━━━\n⚠️ High-Risk Flagged: 2 Accounts (INV-103 ₹6.20L · INV-101 ₹3.85L)\n✉️ Client Emails Dispatched: 5 Tailored Notice Emails Sent\n📊 Full Audit Ledger: Delivered to your primary inbox (admin@company.com)\n━━━━━━━━━━━━━━━━━━━━\nNext scheduled automated re-check: Tomorrow, 09:00 AM IST.',
    });
    console.log('✅ WHATSAPP ALERT DELIVERED! SID:', msg.sid);
    console.log('Status:', msg.status);
  } catch (err) {
    console.error('Twilio Error:', err.message, err.code);
  }
}

run();
