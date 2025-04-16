# EduAI Backend

This is the backend of the EduAI educational platform, built with FastAPI and Python. The backend provides APIs for authentication, AI chat, learning path generation, and performance analysis.

## Implemented Features

- Integration with OpenRouter API for access to advanced AI models
- Chat API for communication with the AI mentor
- Structured response generation in JSON format
- Personalized learning path generation
- JWT authentication system
- SQLite database for development

## Getting Started

### Prerequisites

- Python 3.10+
- OpenRouter API key

### Installation

1. Clone the repository
2. Navigate to the backend directory
3. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
5. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
6. Create a `.env` file based on `.env.example` and add your OpenRouter API key

### Running the Server

You can run the server using the convenience script or directly with uvicorn:

```bash
# Using the convenience script
./run.sh

# Or directly with uvicorn
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at http://localhost:8000.

API documentation is available at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API Endpoints

### Authentication

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Authenticate user and obtain JWT token

### Chat

- `POST /chat/completion`: Generate AI chat response

## Environment Variables

- `OPENROUTER_API_KEY`: Your OpenRouter API key
- `DEFAULT_MODEL`: Default model to use (default: anthropic/claude-3-opus-20240229)
- `PORT`: Server port (default: 8000)
- `HOST`: Server host (default: 0.0.0.0)
- `DEBUG`: Debug mode (default: True)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:3000)
- `DATABASE_URL`: Database connection URL (default: sqlite:///./eduai.db)
- `SECRET_KEY`: Secret key for JWT token generation
- `ALGORITHM`: Algorithm for JWT signature (default: HS256)
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token expiration time in minutes (default: 30)

## Project Structure

```
backend/
├── src/               # Source code
│   ├── api/           # Routes and endpoints
│   │   ├── routes/     # Route definitions
│   │   └── dependencies/ # Dependencies for injection
│   ├── auth/          # Authentication and security
│   ├── models/        # Database models
│   ├── schemas/       # Pydantic schemas
│   └── services/      # Services and business logic
│       ├── ai/          # AI services
│       └── analytics/   # Analytics services
├── main.py           # Application entry point
├── requirements.txt   # Project dependencies
├── .env.example       # Example environment variables
└── run.sh             # Script to run the server
```

## Current Status

- [x] Basic API structure
- [x] OpenRouter API integration
- [x] JWT authentication system
- [x] Chat endpoint
- [ ] Complete AI mentor service
- [ ] Performance analysis service
- [ ] Google Calendar integration
- [ ] Migration to PostgreSQL

> Updated on 04/16/2025
