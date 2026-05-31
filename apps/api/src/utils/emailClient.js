import nodemailer from 'nodemailer';

const requiredConfig = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'EMAIL_FROM',
];

const getMissingConfig = () => {
  return requiredConfig.filter((key) => !process.env[key]);
};

const createTransporter = () => {
  const missingConfig = getMissingConfig();

  if (missingConfig.length > 0) {
    const error = new Error(
      `Email service is not configured. Missing: ${missingConfig.join(', ')}`
    );
    error.statusCode = 503;
    throw error;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const emailClient = {
  async send({ to, bcc, subject, html }) {
    const transporter = createTransporter();

    return transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      bcc,
      subject,
      html,
    });
  },
};

export default emailClient;
