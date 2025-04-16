from typing import List, Optional, Dict
from pydantic import BaseModel, Field
from datetime import datetime

class Resource(BaseModel):
    title: str = Field(..., description="Title of the resource")
    url: Optional[str] = Field(None, description="URL of the resource if available")
    type: str = Field(..., description="Type of resource (e.g., video, article, book)")
    description: str = Field(..., description="Brief description of the resource")
    estimated_time_minutes: int = Field(..., description="Estimated time to complete in minutes")

class Topic(BaseModel):
    title: str = Field(..., description="Title of the topic")
    description: str = Field(..., description="Description of the topic")
    importance: int = Field(..., description="Importance level (1-5)")
    resources: List[Resource] = Field(..., description="Resources for learning this topic")
    prerequisites: Optional[List[str]] = Field(None, description="Prerequisites for this topic")

class Module(BaseModel):
    title: str = Field(..., description="Title of the module")
    description: str = Field(..., description="Description of the module")
    topics: List[Topic] = Field(..., description="Topics in this module")
    estimated_weeks: int = Field(..., description="Estimated weeks to complete")

class LearningPath(BaseModel):
    title: str = Field(..., description="Title of the learning path")
    description: str = Field(..., description="Description of the learning path")
    target_career: str = Field(..., description="Target career or role")
    modules: List[Module] = Field(..., description="Modules in the learning path")
    total_estimated_hours: int = Field(..., description="Total estimated hours to complete")
    created_at: datetime = Field(default_factory=datetime.now, description="Creation timestamp")

class StudyRecommendation(BaseModel):
    title: str = Field(..., description="Title of the recommendation")
    description: str = Field(..., description="Description of the recommendation")
    topics: List[str] = Field(..., description="Topics to focus on")
    resources: List[Resource] = Field(..., description="Recommended resources")
    estimated_time_minutes: int = Field(..., description="Estimated time to complete in minutes")
    priority_level: int = Field(..., description="Priority level (1-5)")
    date: datetime = Field(default_factory=datetime.now, description="Date of the recommendation")