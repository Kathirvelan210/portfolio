# Kathir's Personal Portfolio

A full-stack personal portfolio website built with **React** (frontend) and **Spring Boot** (backend), deployed on **Render**.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion
- Backend: Spring Boot, H2 (in-memory), REST API
- Deployment: Render (Docker)

## Live Demo

[https://personal-portfolio.onrender.com](https://personal-portfolio.onrender.com)

## Run Locally

### Backend
```bash
cd backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Deploy on Render

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Render will auto-detect the `render.yaml` and deploy using Docker
