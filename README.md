# Portfolio Monorepo

This project has two apps:

- `apps/web`: React + Vite frontend
- `apps/api`: Express backend API

## Requirements

- Node.js
- npm
- VS Code

## First Setup

Install dependencies from the project root:

```bash
npm install
```

The project root is:

```text
D:\Projects\P1
```

## Run In Development

Start both the frontend and backend:

```bash
npm run dev
```

Local URLs:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- Health check: `http://localhost:3001/health`

## Useful Commands

Run the frontend build:

```bash
npm run build --prefix apps/web
```

Run frontend lint:

```bash
npm run lint --prefix apps/web
```

Run backend lint:

```bash
npm run lint --prefix apps/api
```

Run backend tests:

```bash
npm run test --prefix apps/api
```

## Environment Variables

The API uses `apps/api/.env`.

For local development:

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
CONTACT_RECIPIENT_EMAIL=your-email@example.com
```

For real contact form email, also add SMTP settings:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM="Portfolio Contact <your-email@example.com>"
```

Do not commit real passwords or secret keys.

## Folder Guide

`apps/web/src/pages`

Pages shown by React Router, such as the homepage and project pages.

`apps/web/src/components`

Reusable frontend pieces like the header, footer, cards, and contact form.

`apps/web/src/components/ui`

UI building blocks generated from the component library.

`apps/api/src/routes`

Backend route handlers, such as `/health` and `/contact`.

`apps/api/src/middleware`

Express middleware, such as error handling and rate limiting.

`apps/api/src/utils`

Backend helper modules, such as logging and email sending.

## Current Status

- Frontend builds successfully.
- Frontend lint passes.
- Backend lint passes.
- Backend tests pass.
- Contact form is wired to the API.
- Real email sending needs SMTP credentials in `apps/api/.env`.
