import nodemailer from 'nodemailer';

/*
  Email configuration guidance:
  - Gmail no longer accepts plain account passwords for SMTP. You must either
    use a 16-character Gmail App Password (when 2-Step Verification is enabled)
    or configure OAuth2 credentials (EMAIL_OAUTH_CLIENT_ID, EMAIL_OAUTH_CLIENT_SECRET,
    EMAIL_OAUTH_REFRESH_TOKEN).
  - Gmail sending limits are roughly ~500 emails/day for regular accounts.
    Consider using a dedicated transactional email provider for higher-volume needs.
*/

const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const oauthClientId = process.env.EMAIL_OAUTH_CLIENT_ID;
  const oauthClientSecret = process.env.EMAIL_OAUTH_CLIENT_SECRET;
  const oauthRefreshToken = process.env.EMAIL_OAUTH_REFRESH_TOKEN;
  const oauthAccessToken = process.env.EMAIL_OAUTH_ACCESS_TOKEN; // optional

  if (!user) {
    const err = new Error('EMAIL_USER is required for sending email');
    err.statusCode = 503;
    throw err;
  }

  const hasOAuth = oauthClientId && oauthClientSecret && oauthRefreshToken;
  const hasPass = Boolean(pass);

  if (!hasOAuth && !hasPass) {
    const err = new Error(
      'Email service is not configured. Provide either a 16-character Gmail App Password in EMAIL_PASS or set EMAIL_OAUTH_CLIENT_ID, EMAIL_OAUTH_CLIENT_SECRET and EMAIL_OAUTH_REFRESH_TOKEN for OAuth2.'
    );
    err.statusCode = 503;
    throw err;
  }

  if (hasPass) {
    // Encourage App Password usage: Gmail App Passwords are 16 characters.
    if (pass.length !== 16) {
      const err = new Error(
        'Invalid EMAIL_PASS: Gmail requires a 16-character App Password when using SMTP. Alternatively, configure OAuth2 via EMAIL_OAUTH_* variables.'
      );
      err.statusCode = 503;
      throw err;
    }

    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
  }

  if (hasOAuth) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user,
        clientId: oauthClientId,
        clientSecret: oauthClientSecret,
        refreshToken: oauthRefreshToken,
        accessToken: oauthAccessToken,
      },
    });
  }

  // Fallback should not be reached due to earlier checks, but keep defensive error.
  const err = new Error('Email transporter configuration failed');
  err.statusCode = 503;
  throw err;
};

const emailClient = {
  async send({ to, bcc, subject, html }) {
    const transporter = createTransporter();

    return transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      bcc,
      subject,
      html,
    });
  },
};

export default emailClient;
