from fastapi import APIRouter
from pydantic import BaseModel

# Create an APIRouter instance
router = APIRouter()

# Message Schema
class ChatMessage(BaseModel):
    message: str

# Health check endpoint
@router.get("/api/health")
def health_check():
    return {"status": "ok"}

# Chat endpoint
@router.post("/api/chat")
def chat(chat_message: ChatMessage):
    response = "Hi there!"
    return {"response": response}