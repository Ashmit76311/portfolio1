Email configuration

- Gmail no longer allows plain account passwords for SMTP. Use one of:
  - A 16-character Gmail App Password (generate in Google Account -> Security -> App passwords) and set `EMAIL_PASS`.
  - OAuth2 credentials: `EMAIL_OAUTH_CLIENT_ID`, `EMAIL_OAUTH_CLIENT_SECRET`, and `EMAIL_OAUTH_REFRESH_TOKEN`. The app supports creating a nodemailer transport with `type: 'OAuth2'`.
- If you use Gmail, be aware of sending limits (~500/day for standard accounts).
- For production or higher volume, consider a transactional email provider (SendGrid, Mailgun, Postmark, SES).

Environment vars referenced in code:
- `EMAIL_USER` (required)
- `EMAIL_PASS` (16-char App Password) OR `EMAIL_OAUTH_CLIENT_ID`, `EMAIL_OAUTH_CLIENT_SECRET`, `EMAIL_OAUTH_REFRESH_TOKEN`
- `EMAIL_FROM` (optional override for the From header)

Security:
- Do not commit real secrets to the repository. Use your platform's secret storage for production deployments.
