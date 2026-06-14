<div align="center">

```
 █████╗ ███████╗██╗  ██╗███╗   ███╗██╗████████╗
██╔══██╗██╔════╝██║  ██║████╗ ████║██║╚══██╔══╝
███████║███████╗███████║██╔████╔██║██║   ██║   
██╔══██║╚════██║██╔══██║██║╚██╔╝██║██║   ██║   
██║  ██║███████║██║  ██║██║ ╚═╝ ██║██║   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝  

---

# 🚀 Ashmit Kumar Srivastav Portfolio

### Full-Stack Developer | Machine Learning Enthusiast | Software Engineer

[![Live Site](https://img.shields.io/badge/Live_Site-00FFFF?style=for-the-badge&logo=vercel&logoColor=000)](https://portfolio-ashmit.netlify.app/)
[![Resume](https://img.shields.io/badge/Resume-0A0F1E?style=for-the-badge&logo=adobeacrobatreader&logoColor=00FFFF)](https://drive.google.com/file/d/1u5Rq2-AiT4Ox7ji4XQsUaZu1_H9_BJYV/view?usp=sharing)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A0F1E?style=for-the-badge&logo=linkedin&logoColor=00FFFF)](https://www.linkedin.com/in/ashmit-kumar-srivastav/)
[![LeetCode](https://img.shields.io/badge/LeetCode-0A0F1E?style=for-the-badge&logo=leetcode&logoColor=00FFFF)](https://leetcode.com/u/fWSPJm4cGh/)

</div>

---

## 🎯 About The Project

A modern full-stack developer portfolio built to showcase projects, technical skills, achievements, and professional experience.

Unlike a static portfolio website, this project includes a dedicated backend service powering contact functionality, email notifications, API endpoints, and future extensibility.

---

## ✨ Highlights

- Modern React + Vite frontend
- Express.js backend API
- Real email integration using Nodemailer
- Interactive Mapbox location support
- Monorepo architecture using npm workspaces
- Production-ready deployment structure
- Responsive design across devices
- Automated linting and testing workflow

---

## 🏗️ Architecture

```text
                        ┌─────────────────────┐
                        │     Visitors        │
                        └──────────┬──────────┘
                                   │
                                   ▼
                    ┌───────────────────────────┐
                    │ React + Vite Frontend     │
                    │ Portfolio UI              │
                    └───────────┬───────────────┘
                                │
                                ▼
                    ┌───────────────────────────┐
                    │ Express Backend API       │
                    │ Contact & Email Service   │
                    └───────────┬───────────────┘
                                │
                                ▼
                    ┌───────────────────────────┐
                    │ SMTP / Email Provider     │
                    │ Nodemailer Integration    │
                    └───────────────────────────┘
```

---

## 🛠️ Technology Stack

### 🎨 Frontend

| Category | Technologies |
|-----------|-------------|
| Framework | React |
| Build Tool | Vite |
| Routing | React Router |
| Styling | Custom CSS |
| Maps | Mapbox GL JS |

### ⚙️ Backend

| Category | Technologies |
|-----------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| Email Service | Nodemailer |
| API Layer | REST APIs |

### 🧪 Development Tools

| Category | Technologies |
|-----------|-------------|
| Package Management | npm Workspaces |
| Linting | ESLint |
| Testing | Vitest |
| Version Control | Git & GitHub |

---

### 🚀 Technology Overview

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nodemailer-30B980?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white"/>
</p>

---

## 📂 Repository Structure

```text
apps/
├── web/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── components/ui/
│   │
│   └── public/
│
└── api/
    └── src/
        ├── routes/
        ├── middleware/
        └── utils/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Clone Repository

```bash
git clone https://github.com/ashmit/portfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

```bash
cp apps/api/.env.example apps/api/.env
```

Update the values inside `.env`.

### Start Development Servers

```bash
npm run dev
```

---

## 🌐 Local Services

| Service | URL |
|----------|------|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:3001 |
| Health Check | http://localhost:3001/health |

---

## 🔐 Environment Variables

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
CONTACT_RECIPIENT_EMAIL=your-email@example.com

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM="Portfolio Contact <no-reply@example.com>"
```

> Never commit secrets or production credentials.

---

## 📜 Available Commands

```bash
npm run dev
npm run build
npm run check

npm run build --prefix apps/web
npm run lint  --prefix apps/web
npm run lint  --prefix apps/api
npm run test  --prefix apps/api
```

---

## 📈 Current Status

- ✅ Frontend Production Ready
- ✅ Backend API Functional
- ✅ Contact Form Integrated
- ✅ Automated Testing Setup
- ✅ Responsive Design
- ⏳ SMTP Configuration Required for Live Email Delivery

---

## 🌟 Featured Projects

### 🚦 Urban Route Intelligence System (URIS)

AI-powered navigation platform using geospatial risk analysis and machine learning.

**Tech:** React, Node.js, Python, Mapbox GL JS, Random Forest

🔗 https://github.com/Ashmit76311/Urban-Route-Intelligence-System

---

### 📊 Crypto Market Analytics Dashboard

Real-time cryptocurrency analytics platform with ETL pipelines and business intelligence dashboards.

**Tech:** Python, Pandas, MySQL, FastAPI, Apache Superset

🔗 https://github.com/Ashmit76311/Crypto-Market-Analytics-Dashboard

---

## 🎯 Skills Demonstrated

- Full-Stack Development
- Frontend Engineering
- Backend Development
- REST API Design
- Email Service Integration
- Responsive Web Design
- Testing & Quality Assurance
- Git & Version Control
- Software Architecture

---

<div align="center">

### 👨‍💻 Ashmit Kumar Srivastav

📧 ashmitsrivastav40@gmail.com

</div>
