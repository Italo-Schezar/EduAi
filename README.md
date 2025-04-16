# EduAI Platform

**Intelligent educational platform with AI + Statistics**, designed for young people and adults seeking scientific advancement.
This project uses **Next.js (frontend)** and **FastAPI (backend)** to create a personalized educational experience, with dashboards, AI mentor, and Google Calendar integration.

---

## 🧠 Project Vision

- Learning based on statistics and real performance
- AI mentor trained with a focus on academic and professional guidance
- Dynamic calendar with Google Calendar API
- Modular system: frontend (Next.js + TailwindCSS) and backend (FastAPI + Python)
- Project designed for scalability and potential Kickstarter campaign

---

## 📦 Technologies Used

- Frontend: Next.js 14 + TypeScript + TailwindCSS
- Backend: FastAPI + Python 3.10+
- Database: SQLite (development), PostgreSQL (planned for production)
- AI: Integration via OpenRouter API (Claude, DeepSeek, etc.)
- Authentication: JWT with OAuth2
- Version Control: Git + GitHub

---

## 🛠️ Installation and Local Usage (Linux)

### Prerequisites

- Node.js and npm
- Python 3.10+
- Git installed
- (Optional) Python virtual environment

### 1. Clone the project

```bash
git clone https://github.com/Italo-Schezar/eduai-platform.git
cd eduai-platform
```

### 2. Install the frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Configure and run the backend

```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
# Create a .env file based on .env.example and add your OpenRouter API key
./run.sh  # or: uvicorn main:app --reload
```

The API will be available at http://localhost:8000 and the documentation at http://localhost:8000/docs

---

## 📂 Current Project Structure

```
eduai-platform/
├── frontend/                # Next.js application (interface)
│   ├── app/                # Routes and pages
│   │   ├── (app)/         # Authenticated area
│   │   └── (public)/      # Public pages (landing page)
│   ├── components/        # Reusable components
│   └── public/            # Static files
│
├── backend/               # FastAPI API
│   ├── src/               # Source code
│   │   ├── api/           # Routes and endpoints
│   │   ├── auth/          # Authentication and security
│   │   ├── models/        # Database models
│   │   ├── schemas/       # Pydantic schemas
│   │   └── services/      # Services and business logic
│   └── venv/              # Python virtual environment
│
└── docs/                  # Documentation
    └── architecture.md    # System architecture
```

---

## 🤝 Collaboration

This project is in the initial phase of collaborative development.
If you want to contribute with code, ideas, or tests, feel free to fork the repository or submit issues/suggestions.

---

## 📅 Current Status

- [x] Git/GitHub structure configured
- [x] Frontend started with Next.js and Tailwind
- [x] Public and authenticated routes structure
- [x] Backend structured with FastAPI
- [x] OpenRouter API integration implemented
- [x] JWT authentication system
- [ ] Dashboard with learning statistics
- [ ] Google Calendar integration pending
- [ ] Deploy and Landing Page for Kickstarter

---

> Updated on 04/16/2025
