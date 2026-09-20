import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env');
let sid = '';
let token = '';
let to = '+917289977264';
let from = '+17372508034';

if (fs.existsSync(envPath)) {
  const env = fs.readFileSync(envPath, 'utf8');
  const sidMatch = env.match(/TWILIO_ACCOUNT_SID=(.*)/);
  const tokenMatch = env.match(/TWILIO_AUTH_TOKEN=(.*)/);
  const toMatch = env.match(/ADMIN_WHATSAPP_NUMBER=(.*)/);
  const fromMatch = env.match(/TWILIO_WHATSAPP_SENDER=(.*)/);
  if (sidMatch) sid = sidMatch[1].trim();
  if (tokenMatch) token = tokenMatch[1].trim();
  if (toMatch) to = toMatch[1].trim();
  if (fromMatch) from = fromMatch[1].trim();
}

console.log(`Testing Twilio WhatsApp:
Account SID: ${sid}
Auth Token: ${token ? 'FOUND' : 'MISSING'}
From: ${from}
To: ${to}
`);

async function sendTest() {
  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;
  const authHeader = 'Basic ' + Buffer.from(`${sid}:${token}`).toString('base64');
  const params = new URLSearchParams();
  params.append('From', `whatsapp:${from}`);
  params.append('To', `whatsapp:${to}`);
  params.append('Body', '🚀 [TEST VERIFIED] Autonomous Revenue Recovery System Connected! You will receive live webinar alerts here.');

  try {
    const resp = await fetch(twilioUrl, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data = await resp.json();
    if (resp.ok) {
      console.log('✅ WHATSAPP MESSAGE SENT SUCCESSFULLY!');
      console.log('SID:', data.sid);
      console.log('Status:', data.status);
    } else {
      console.log('⚠️ Twilio Response:', data.code, data.message);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

sendTest();
