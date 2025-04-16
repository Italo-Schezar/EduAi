from typing import List, Optional, Dict, Any
import logging
from datetime import datetime

from services.ai.llm_client import LLMClient, ChatMessage
from schemas.chat import ChatRequest, ChatResponse

logger = logging.getLogger(__name__)

class ChatService:
    """
    Service for handling chat interactions with the AI.
    """
    
    def __init__(self, llm_client: LLMClient):
        self.llm_client = llm_client
    
    async def generate_chat_response(self, request: ChatRequest) -> ChatResponse:
        """
        Generate a response to a chat message.
        
        Args:
            request: The chat request containing messages and parameters
            
        Returns:
            A chat response with the generated message
        """
        # Convert request messages to LLMClient format
        messages = [
            ChatMessage(role=msg.role, content=msg.content)
            for msg in request.messages
        ]
        
        # Add system message if not present
        if not any(msg.role == "system" for msg in messages):
            system_message = ChatMessage(
                role="system",
                content=(
                    "You are an AI educational mentor for the EduAI platform. "
                    "Your goal is to help students learn effectively by providing "
                    "clear explanations, study recommendations, and academic guidance. "
                    "Be supportive, encouraging, and focus on helping the student achieve "
                    "their educational goals. Provide specific, actionable advice when possible."
                )
            )
            messages.insert(0, system_message)
        
        # Generate response from LLM
        response = await self.llm_client.generate_chat_completion(
            messages=messages,
            temperature=request.temperature,
            max_tokens=request.max_tokens,
            model=request.model
        )
        
        # Extract assistant message from response
        try:
            content = response.get("choices", [{}])[0].get("message", {}).get("content", "")
            role = response.get("choices", [{}])[0].get("message", {}).get("role", "assistant")
            
            # Create response object
            assistant_message = ChatMessage(role=role, content=content)
            
            # Extract usage information if available
            usage = response.get("usage", None)
            
            # Get model information
            model = response.get("model", request.model)
            
            return ChatResponse(
                message=assistant_message,
                usage=usage,
                model=model
            )
        except Exception as e:
            logger.error(f"Error processing chat response: {e}")
            # Return a fallback response
            return ChatResponse(
                message=ChatMessage(
                    role="assistant",
                    content="I apologize, but I encountered an error processing your request. Please try again."
                )
            )
