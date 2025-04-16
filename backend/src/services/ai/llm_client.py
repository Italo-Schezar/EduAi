from typing import Dict, List, Optional, Any, Union
import json
import logging
import httpx
import os
from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)

class ChatMessage(BaseModel):
    role: str
    content: str

class LLMClient:
    """
    Client for interacting with OpenRouter API to access various LLM models.
    """
    
    def __init__(
        self, 
        api_key: Optional[str] = None,
        default_model: str = "anthropic/claude-3-opus-20240229",
        api_base: str = "https://openrouter.ai/api/v1",
        timeout: int = 60
    ):
        self.api_key = api_key or os.getenv("OPENROUTER_API_KEY")
        if not self.api_key:
            raise ValueError("OpenRouter API key is required")
        
        self.default_model = default_model
        self.api_base = api_base
        self.timeout = timeout
        
    async def generate_chat_completion(
        self,
        messages: List[ChatMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
        top_p: Optional[float] = None,
        stream: bool = False
    ) -> Dict[str, Any]:
        """
        Generate a chat completion using the OpenRouter API.
        
        Args:
            messages: List of chat messages in the conversation
            model: Model to use (defaults to the instance default_model)
            temperature: Controls randomness (0-1)
            max_tokens: Maximum number of tokens to generate
            top_p: Controls diversity via nucleus sampling
            stream: Whether to stream the response
            
        Returns:
            The API response as a dictionary
        """
        url = f"{self.api_base}/chat/completions"
        
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://eduai-platform.com",  # Replace with your actual domain
            "X-Title": "EduAI Platform"
        }
        
        payload = {
            "model": model or self.default_model,
            "messages": [msg.dict() for msg in messages],
            "temperature": temperature,
            "stream": stream
        }
        
        if max_tokens is not None:
            payload["max_tokens"] = max_tokens
            
        if top_p is not None:
            payload["top_p"] = top_p
        
        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.post(url, headers=headers, json=payload)
                response.raise_for_status()
                return response.json()
        except httpx.HTTPStatusError as e:
            logger.error(f"HTTP error occurred: {e}")
            raise
        except httpx.RequestError as e:
            logger.error(f"Request error occurred: {e}")
            raise
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            raise
    
    async def generate_structured_response(
        self,
        prompt: str,
        response_schema: Dict[str, Any],
        temperature: float = 0.7,
        model: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Generate a structured response according to a provided schema.
        
        Args:
            prompt: The prompt to send to the model
            response_schema: JSON schema that defines the expected response structure
            temperature: Controls randomness (0-1)
            model: Model to use (defaults to the instance default_model)
            
        Returns:
            Structured response as a dictionary
        """
        system_message = ChatMessage(
            role="system",
            content=(
                "You are an AI assistant for an educational platform. "
                "Provide responses in the exact JSON format specified. "
                f"Response schema: {json.dumps(response_schema)}"
            )
        )
        
        user_message = ChatMessage(
            role="user",
            content=prompt
        )
        
        response = await self.generate_chat_completion(
            messages=[system_message, user_message],
            model=model,
            temperature=temperature
        )
        
        try:
            # Extract the content from the response
            content = response.get("choices", [{}])[0].get("message", {}).get("content", "")
            
            # Try to parse the JSON content
            # First, try to find JSON within markdown code blocks if present
            if "```json" in content:
                json_str = content.split("```json")[1].split("```")[0].strip()
                return json.loads(json_str)
            elif "```" in content:
                json_str = content.split("```")[1].split("```")[0].strip()
                return json.loads(json_str)
            else:
                # Otherwise, try to parse the entire content as JSON
                return json.loads(content)
        except (json.JSONDecodeError, IndexError) as e:
            logger.error(f"Failed to parse structured response: {e}")
            logger.debug(f"Raw response content: {content}")
            raise ValueError(f"Failed to parse structured response: {e}")
