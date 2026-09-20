import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function getEnvConfig() {
  const envPath = path.resolve('.env');
  const config = {
    GMAIL_USER: 'abhishek.nitj.002@gmail.com',
    GMAIL_APP_PASSWORD: 'basptolxqbnxwqmg',
    RECIPIENT_TEST_EMAIL: 'abhishekmkumar676@gmail.com',
  };

  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    lines.forEach((line) => {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match) {
        config[match[1]] = match[2].trim();
      }
    });
  }
  return config;
}

function recoveryPipelinePlugin() {
  return {
    name: 'recovery-pipeline-middleware',
    configureServer(server) {
      server.middlewares.use('/api/run-recovery-pipeline', async (req, res) => {
        // Set CORS & Content-Type
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          return res.end();
        }

        try {
          const config = getEnvConfig();
          const dataFile = path.resolve('src/data/demoRecoveryData.json');
          let data = { records: [] };
          if (fs.existsSync(dataFile)) {
            data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
          }

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: config.GMAIL_USER,
              pass: config.GMAIL_APP_PASSWORD.replace(/\s+/g, ''),
            },
          });

          // Send emails
          const results = [];
          const recipient = config.RECIPIENT_TEST_EMAIL || config.GMAIL_USER;

          for (const record of data.records) {
            const mailOptions = {
              from: `"Autonomous Accounts Recovery" <${config.GMAIL_USER}>`,
              to: `"${record.contactPerson} (${record.clientName})" <${recipient}>`,
              subject: `[${record.riskTier.toUpperCase()}] ${record.emailDraft.subject}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 620px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; color: #1e293b;">
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 16px;">
                    <div>
                      <span style="font-size: 11px; font-weight: bold; letter-spacing: 0.1em; color: #64748b; text-transform: uppercase;">Invoice Reference</span>
                      <div style="font-size: 18px; font-weight: bold; color: #0f172a;">${record.invoiceId}</div>
                    </div>
                    <div style="text-align: right;">
                      <span style="display: inline-block; padding: 4px 10px; background: #fef3c7; color: #92400e; font-size: 11px; font-weight: bold; border-radius: 9999px;">
                        ${record.status} (${record.overdueDays} Days Overdue)
                      </span>
                    </div>
                  </div>

                  <div style="background: #f8fafc; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
                    <table style="width: 100%; font-size: 13px; color: #475569;">
                      <tr>
                        <td><strong>Client Name:</strong> ${record.clientName}</td>
                        <td style="text-align: right;"><strong>Amount Outstanding:</strong> <span style="font-size: 16px; font-weight: bold; color: #0f172a;">${record.amount}</span></td>
                      </tr>
                      <tr>
                        <td><strong>Attention:</strong> ${record.contactPerson}</td>
                        <td style="text-align: right;"><strong>AI Strategy:</strong> ${record.emailDraft.tone}</td>
                      </tr>
                    </table>
                  </div>

                  <div style="font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-line;">
                    ${record.emailDraft.body}
                  </div>

                  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                    Generated & dispatched autonomously via Multi-Agent AI System · Sender: ${config.GMAIL_USER}
                  </div>
                </div>
              `,
            };

            const info = await transporter.sendMail(mailOptions);
            results.push({
              invoiceId: record.invoiceId,
              clientName: record.clientName,
              messageId: info.messageId,
              status: 'Dispatched to Sent Folder',
            });
          }

          res.statusCode = 200;
          return res.end(
            JSON.stringify({
              success: true,
              emailsSent: results.length,
              recipient,
              results,
              timestamp: new Date().toLocaleTimeString(),
            })
          );
        } catch (error) {
          console.error('Pipeline Error:', error);
          res.statusCode = 500;
          return res.end(
            JSON.stringify({
              success: false,
              error: error.message,
            })
          );
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), recoveryPipelinePlugin()],
  base: '/webinar-presentation/',
});
