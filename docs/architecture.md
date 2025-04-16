EduAI Platform
│
├── Frontend (Next.js + TypeScript)
│   ├── app/
│   │   ├── dashboard/     # Visualizações principais
│   │   ├── study-path/    # Roadmaps personalizados
│   │   └── ai-mentor/     # Interface do mentor IA
│   └── components/
│       ├── analytics/     # Gráficos e métricas
│       └── calendar/      # Integração Google Calendar
│
├── Backend (FastAPI + Python)
│   ├── core/
│   │   ├── ai_engine/     # Lógica da IA
│   │   ├── analytics/     # Processamento estatístico
│   │   └── scheduler/     # Gestão de calendário
│   │
│   ├── domain/
│   │   ├── user/         # Entidades de usuário
│   │   ├── content/      # Material didático
│   │   └── progress/     # Métricas de evolução
│   │
│   └── infrastructure/
│       ├── database/     # PostgreSQL + Redis
│       ├── ai_service/   # Integração Claude/GPT
│       └── calendar_api/ # Google Calendar