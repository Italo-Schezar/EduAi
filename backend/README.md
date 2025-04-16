# EduAI Backend

This is the backend for the EduAI educational platform, built with FastAPI and Python.

## Features

- AI Mentor powered by OpenRouter API
- Chat completion API
- Structured response generation
- Learning path generation

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

```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000.

API documentation is available at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API Endpoints

### Chat

- `POST /chat/completion`: Generate a chat completion response

## Environment Variables

- `OPENROUTER_API_KEY`: Your OpenRouter API key
- `DEFAULT_MODEL`: Default model to use (default: anthropic/claude-3-opus-20240229)
- `PORT`: Server port (default: 8000)
- `HOST`: Server host (default: 0.0.0.0)
- `DEBUG`: Debug mode (default: True)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:3000)
