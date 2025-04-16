# EduAI Platform

**Plataforma educacional inteligente com IA + Estatísticas**, voltada para jovens e adultos que buscam aprofundamento científico.  
Este projeto usa **Next.js (frontend)** e **FastAPI (backend)** para criar uma experiência educacional personalizada, com dashboards, IA mentor e integração com Google Calendar.

---

## 🧠 Visão do Projeto

- Aprendizado baseado em estatísticas e desempenho real
- IA mentor treinada com foco em direcionamento acadêmico e profissional
- Calendário dinâmico com Google Calendar API
- Sistema modular: frontend (Next.js + TailwindCSS) e backend (FastAPI + Python)
- Projeto pensado para escalabilidade e possível campanha no Kickstarter

---

## 📦 Tecnologias Utilizadas

- Frontend: Next.js + TypeScript + TailwindCSS
- Backend: FastAPI + Python
- Banco de Dados: PostgreSQL + Redis (planejado)
- IA: Integração via OpenRouter API (Claude, DeepSeek, etc.)
- Controle de Versão: Git + GitHub

---

## 🛠️ Instalação e Uso Local (Linux)

### Pré-requisitos

- Node.js e npm
- Python 3.10+
- Git instalado
- (Opcional) Ambiente virtual Python

### 1. Clone o projeto

```bash
git clone https://github.com/Italo-Schezar/eduai-platform.git
cd eduai-platform
```

### 2. Instale o frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Configurar e rodar backend (ainda em construção)

```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install fastapi uvicorn
uvicorn main:app --reload
```

---

## 📂 Estrutura Atual do Projeto

```
eduai-platform/
├── frontend/      # Aplicação Next.js (interface)
├── backend/       # Estrutura inicial para FastAPI
├── docs/          # Arquitetura, metas e anotações
└── architecture.md
```

---

## 🤝 Colaboração

Este projeto está em fase inicial de desenvolvimento colaborativo.  
Caso queira contribuir com código, ideias ou testes, sinta-se à vontade para fazer um fork ou mandar issues/sugestões.

---

## 📅 Status Atual

- [x] Estrutura Git/GitHub configurada
- [x] Frontend iniciado com Next.js e Tailwind
- [ ] Backend em estruturação com FastAPI
- [ ] Integração com IA e Google Calendar pendentes
- [ ] Deploy e Landing Page futura para Kickstarter

---

> Atualizado em 16/04/2025
