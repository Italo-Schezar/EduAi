from typing import List, Optional
from pydantic import BaseModel, Field
from datetime import datetime

class ChatMessage(BaseModel):
    role: str = Field(..., description="Role of the message sender (user or assistant)")
    content: str = Field(..., description="Content of the message")
    timestamp: Optional[datetime] = Field(default_factory=datetime.now, description="Timestamp of the message")

class ChatRequest(BaseModel):
    messages: List[ChatMessage] = Field(..., description="List of previous messages in the conversation")
    user_id: Optional[str] = Field(None, description="User ID for personalized responses")
    temperature: Optional[float] = Field(0.7, description="Temperature for response generation (0-1)")
    max_tokens: Optional[int] = Field(None, description="Maximum number of tokens to generate")
    model: Optional[str] = Field(None, description="Model to use for generation")

class ChatResponse(BaseModel):
    message: ChatMessage = Field(..., description="Generated assistant message")
    usage: Optional[dict] = Field(None, description="Token usage information")
    model: Optional[str] = Field(None, description="Model used for generation")
