from fastapi import APIRouter, Depends, HTTPException
from typing import List

from schemas.chat import ChatRequest, ChatResponse
from services.ai.chat_service import ChatService
from services.ai.llm_client import LLMClient
from api.dependencies import get_llm_client, get_chat_service

router = APIRouter(prefix="/chat", tags=["chat"])

@router.post("/completion", response_model=ChatResponse)
async def chat_completion(
    request: ChatRequest,
    chat_service: ChatService = Depends(get_chat_service)
):
    """
    Generate a chat completion response.
    
    This endpoint takes a list of messages and returns a response from the AI.
    """
    try:
        response = await chat_service.generate_chat_response(request)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating chat response: {str(e)}")
