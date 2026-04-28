const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- EMAIL CONFIGURATION ---
// Developer note: The user needs to fill these in .env file
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'mohanrajk137@gmail.com', // Default developer email
    pass: process.env.EMAIL_PASS // User's App Password
  }
});

app.get('/', (req, res) => {
  res.send('AGROSCAN AI Backend - Ready for Telemetry');
});

// Feedback Endpoint with Email Integration
app.post('/api/feedback', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(`[TELEMETRY] New feedback from ${name} (${email}): ${message}`);

  // 1. Prepare Email
  const mailOptions = {
    from: email,
    to: 'mohanrajk137@gmail.com',
    subject: `AGROSCAN AI: New Feedback from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      
      -- Sent via AGROSCAN AI Smart Platform
    `,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #10b981; border-radius: 15px; background: #020617; color: #f1f5f9;">
        <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Feedback Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-top: 15px;">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #334155; margin-top: 20px;">
        <p style="font-size: 10px; color: #64748b; text-align: center; text-transform: uppercase; letter-spacing: 2px;">Agroscan AI Telemetry System</p>
      </div>
    `
  };

  // 2. Send Email
  if (process.env.EMAIL_PASS) {
    try {
      await transporter.sendMail(mailOptions);
      console.log(`[SUCCESS] Email sent to developer.`);
      res.status(200).json({ success: true, message: 'Feedback sent successfully to developer email.' });
    } catch (error) {
      console.error(`[ERROR] Failed to send email:`, error);
      // Fallback: If email fails but message is received, still return 200 but log error
      res.status(200).json({ success: true, message: 'Feedback received, but email failed to send (check credentials).' });
    }
  } else {
    console.warn(`[WARNING] EMAIL_PASS not found in environment. Logging feedback only.`);
    res.status(200).json({ success: true, message: 'Feedback received locally (Email simulation mode).' });
  }
});

app.listen(PORT, () => {
  console.log(`\n==========================================`);
  console.log(`🚀 AGROSCAN AI Backend Active on Port ${PORT}`);
  console.log(`📫 Feedback Target: mohanrajk137@gmail.com`);
  console.log(`==========================================\n`);
});
