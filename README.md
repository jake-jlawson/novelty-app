# Novelty Experience Generator

A simple MVP web application that generates novel experiences using GPT. Built with Next.js frontend and FastAPI backend, deployed on Vercel.

## Project Structure

```
novelty-app/
├── api/                 # Python FastAPI backend
│   ├── routes/         # API route handlers
│   ├── models/         # Pydantic models
│   ├── services/       # Business logic (GPT integration)
│   ├── main.py         # FastAPI entry point
│   └── requirements.txt
├── frontend/           # Next.js application
├── shared/             # Shared types/interfaces
├── .env.example        # Environment variables template
└── vercel.json         # Vercel deployment config
```

## Setup

### Backend (API)
1. Install Python dependencies:
   ```bash
   pip install -r api/requirements.txt
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your OpenAI API key
   ```

3. Run locally:
   ```bash
   cd api
   uvicorn main:app --reload
   ```

### Frontend
1. Initialize Next.js (from the frontend directory):
   ```bash
   cd frontend
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   ```

2. Install and run:
   ```bash
   npm install
   npm run dev
   ```

## Deployment

Deploy to Vercel:
```bash
vercel
```

The `vercel.json` configuration handles both the FastAPI backend and Next.js frontend deployment.

## Environment Variables

Required environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key

## API Endpoints

- `GET /`: Welcome message
- `GET /health`: Health check
- `POST /api/experiences`: Generate novel experiences (to be implemented) 