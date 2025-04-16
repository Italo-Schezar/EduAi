from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Import API routes
from src.api.routes import chat, auth

# Import database
from src.database import engine
from src.models import user

# Create database tables
user.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="EduAI API",
    description="Backend API for the EduAI educational platform",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chat.router)
app.include_router(auth.router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to EduAI API",
        "docs": "/docs",
        "version": app.version
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
