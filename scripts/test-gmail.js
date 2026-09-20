import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Read .env manually
const envPath = path.resolve('.env');
let user = process.env.GMAIL_USER || 'abhishek.nitj.002@gmail.com';
let pass = process.env.GMAIL_APP_PASSWORD || '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const userMatch = envContent.match(/GMAIL_USER=(.*)/);
  const passMatch = envContent.match(/GMAIL_APP_PASSWORD=(.*)/);
  if (userMatch) user = userMatch[1].trim();
  if (passMatch) pass = passMatch[1].trim();
}

console.log('Authenticating with Gmail SMTP for:', user);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: pass.replace(/\s+/g, ''),
  },
});

async function main() {
  try {
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP Connection Successful!');

    console.log('Sending test email to verify Sent folder delivery...');
    const info = await transporter.sendMail({
      from: `"Autonomous Finance Brain" <${user}>`,
      to: `"Abhishek (Admin)" <${user}>`,
      subject: '🚀 [TEST VERIFIED] Autonomous Revenue Recovery System Connected',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <div style="display: inline-block; padding: 6px 12px; background: #ecfdf5; color: #059669; font-size: 12px; font-weight: bold; border-radius: 6px; margin-bottom: 16px;">
            SYSTEM VERIFICATION COMPLETE
          </div>
          <h2 style="color: #0f172a; margin-top: 0;">Autonomous Email Pipeline is Live!</h2>
          <p style="color: #334155; line-height: 1.6;">
            This email was sent automatically through your Gmail SMTP connection. 
          </p>
          <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 14px; margin: 16px 0; border-radius: 4px;">
            <strong>Check your Gmail:</strong> This message is now sitting at the top of your official <strong>"Sent"</strong> folder in <code>abhishek.nitj.002@gmail.com</code>.
          </div>
          <p style="color: #64748b; font-size: 13px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            Webinar Demo System · Generated via Autonomous AI Pipeline
          </p>
        </div>
      `,
    });

    console.log('🎉 EMAIL SENT SUCCESSFULLY!');
    console.log('Message ID:', info.messageId);
    console.log('Recipient:', user);
  } catch (error) {
    console.error('❌ Error sending test email:', error);
  }
}

main();
