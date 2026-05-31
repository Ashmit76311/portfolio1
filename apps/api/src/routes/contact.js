import express from 'express';
import emailClient from '../utils/emailClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

const VALID_SUBJECTS = ['Internship', 'Project', 'Collaboration', 'Other'];
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'ashmitsrivastav40@gmail.com';

const escapeHtml = (value) => {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
};

// Email validation regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';

  // Validation
  if (trimmedName.length < 2) {
    return res.status(400).json({
      error: 'Name is required and must be at least 2 characters long',
    });
  }

  if (!isValidEmail(trimmedEmail)) {
    return res.status(400).json({
      error: 'Valid email address is required',
    });
  }

  if (!subject || typeof subject !== 'string' || !VALID_SUBJECTS.includes(subject)) {
    return res.status(400).json({
      error: `Subject must be one of: ${VALID_SUBJECTS.join(', ')}`,
    });
  }

  if (trimmedMessage.length < 10) {
    return res.status(400).json({
      error: 'Message is required and must be at least 10 characters long',
    });
  }

  const timestamp = new Date().toISOString();
  const emailSubject = `New Contact Form Submission: ${subject}`;
  const safeName = escapeHtml(trimmedName);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br>');

  try {
    await emailClient.send({
      to: RECIPIENT_EMAIL,
      bcc: trimmedEmail,
      subject: emailSubject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr>
        <p><em>Reply to: ${safeEmail}</em></p>
      `,
    });

    logger.info(`Contact form email sent from ${trimmedEmail} with subject: ${subject}`);

    res.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    logger.error('Failed to send contact form email:', error.message);
    const emailError = new Error('Failed to send email. Please try again later.');
    emailError.statusCode = error.statusCode || 500;
    throw emailError;
  }
});

export default router;
