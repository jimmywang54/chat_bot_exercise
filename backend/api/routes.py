from fastapi import APIRouter
from pydantic import BaseModel
import random

# Create an APIRouter instance
router = APIRouter()

# Message Schema
class ChatMessage(BaseModel):
    message: str

# Predefined bot responses
BOT_RESPONSES = [
    "Hello! How can I assist you today?",
    "Hi there! What can I do for you?",
    "Hey! Need help with something?",
    "Greetings! How may I assist?",
    "Hi! What’s on your mind today?",
]

# Health check endpoint
@router.get("/api/health")
def health_check():
    return {"status": "ok"}

# Chat endpoint
@router.post("/api/chat")
def chat(chat_message: ChatMessage):
    # Randomly select a response from the BOT_RESPONSES list
    response = random.choice(BOT_RESPONSES)
    return {"response": response}