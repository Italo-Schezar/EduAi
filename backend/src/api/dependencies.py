from fastapi import Depends
import os
from functools import lru_cache

from src.services.ai.llm_client import LLMClient
from src.services.ai.chat_service import ChatService

@lru_cache()
def get_settings():
    """Get application settings."""
    return {
        "openrouter_api_key": os.getenv("OPENROUTER_API_KEY"),
        "default_model": os.getenv("DEFAULT_MODEL", "anthropic/claude-3-opus-20240229"),
    }

def get_llm_client(settings: dict = Depends(get_settings)) -> LLMClient:
    """Get an instance of the LLM client."""
    return LLMClient(
        api_key=settings["openrouter_api_key"],
        default_model=settings["default_model"]
    )

def get_chat_service(llm_client: LLMClient = Depends(get_llm_client)) -> ChatService:
    """Get an instance of the chat service."""
    return ChatService(llm_client=llm_client)
