<div align="center">

```
 █████╗ ███████╗██╗  ██╗███╗   ███╗██╗████████╗
██╔══██╗██╔════╝██║  ██║████╗ ████║██║╚══██╔══╝
███████║███████╗███████║██╔████╔██║██║   ██║   
██╔══██║╚════██║██╔══██║██║╚██╔╝██║██║   ██║   
██║  ██║███████║██║  ██║██║ ╚═╝ ██║██║   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝  
```

### Personal Portfolio — Ashmit Kumar Srivastav

[![Live Site](https://img.shields.io/badge/Live_Site-00FFFF?style=for-the-badge&logo=vercel&logoColor=000)](https://portfolio-ashmit.netlify.app/)
[![Resume](https://img.shields.io/badge/Resume-0A0F1E?style=for-the-badge&logo=adobeacrobatreader&logoColor=00FFFF)](https://drive.google.com/file/d/1u5Rq2-AiT4Ox7ji4XQsUaZu1_H9_BJYV/view?usp=sharing)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A0F1E?style=for-the-badge&logo=linkedin&logoColor=00FFFF)](https://www.linkedin.com/in/ashmit-kumar-srivastav/)
[![LeetCode](https://img.shields.io/badge/LeetCode-0A0F1E?style=for-the-badge&logo=leetcode&logoColor=00FFFF)](https://leetcode.com/u/fWSPJm4cGh/)

</div>

---

## What's inside

A full-stack portfolio monorepo — React frontend, Express backend, contact form wired to real email. Built to show work, not just list it.

```
apps/
├── web/          → React + Vite frontend (port 3000)
└── api/          → Express backend API  (port 3001)
```

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React, Vite, React Router |
| Backend | Node.js, Express |
| Styling | CSS (custom, no framework) |
| Email | Nodemailer + SMTP |
| Maps | Mapbox GL JS |
| Tooling | ESLint, Vitest, npm workspaces |

---

## Get running

**Prerequisites:** Node.js, npm

```bash
# 1. Clone
git clone https://github.com/ashmit/portfolio.git
cd portfolio

# 2. Install everything from root
npm install

# 3. Set up environment
cp apps/api/.env.example apps/api/.env
# → edit apps/api/.env with your SMTP credentials

# 4. Start both apps
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:3001 |
| Health check | http://localhost:3001/health |

---

## Environment variables

`apps/api/.env` — required for local dev:

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
CONTACT_RECIPIENT_EMAIL=your-email@example.com
```

For real email sending, also add:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM="Portfolio Contact <no-reply@example.com>"
```

> Never commit real credentials. Add `.env` to `.gitignore`.

---

## Commands

```bash
npm run dev              # Start frontend + backend together
npm run build            # Production build
npm run check            # Lint + test everything

# Scoped
npm run build --prefix apps/web
npm run lint  --prefix apps/web
npm run lint  --prefix apps/api
npm run test  --prefix apps/api
```

---

## Project structure

```
apps/web/src/
├── pages/          # Route-level components (Home, Projects, About, Contact)
├── components/     # Shared UI — Header, Footer, Cards, ContactForm
└── components/ui/  # Base component library primitives

apps/api/src/
├── routes/         # /health, /contact
├── middleware/     # Error handling, rate limiting
└── utils/          # Logger, email sender
```

---

## Status

- [x] Frontend builds and lints clean
- [x] Backend lints and tests pass
- [x] Contact form connected to API
- [ ] SMTP credentials needed for real email delivery

---

## Featured projects

**[URIS — Urban Route Intelligence System](https://github.com/Ashmit76311/Urban-Route-Intelligence-System)**
AI-powered navigation using geospatial risk scoring — React, Node.js, Python, Mapbox GL JS, Random Forest

**[Crypto Market Analytics Dashboard](https://github.com/Ashmit76311/Crypto-Market-Analytics-Dashboard)**
Real-time market data pipeline — Python, Pandas, MySQL, Apache Superset, CoinGecko API

---

<div align="center">

Built by **Ashmit Kumar Srivastav** · [ashmitsrivastav40@gmail.com](mailto:ashmitsrivastav40@gmail.com)

</div>
