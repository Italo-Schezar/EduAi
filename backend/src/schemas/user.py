from typing import List, Optional, Dict
from pydantic import BaseModel, Field, EmailStr
from datetime import datetime

class UserPreferences(BaseModel):
    learning_style: str = Field(..., description="Preferred learning style (visual, auditory, reading, kinesthetic)")
    preferred_resources: List[str] = Field(..., description="Preferred resource types (video, article, book, etc.)")
    daily_study_time: int = Field(..., description="Preferred daily study time in minutes")
    difficulty_preference: str = Field(..., description="Preferred difficulty level (beginner, intermediate, advanced)")
    interests: List[str] = Field(..., description="Areas of interest")

class UserProfile(BaseModel):
    id: str = Field(..., description="Unique identifier for the user")
    name: str = Field(..., description="User's name")
    email: EmailStr = Field(..., description="User's email address")
    career_goal: Optional[str] = Field(None, description="User's career goal")
    education_level: Optional[str] = Field(None, description="User's education level")
    preferences: Optional[UserPreferences] = Field(None, description="User's learning preferences")
    created_at: datetime = Field(default_factory=datetime.now, description="Account creation timestamp")
    last_active: datetime = Field(default_factory=datetime.now, description="Last activity timestamp")
