from fastapi import APIRouter
from pydantic import BaseModel
import asyncio
from .services.chat_service import get_chatgpt_response
import logging

# Configure logger
logger = logging.getLogger(__name__)

# Create an APIRouter instance
router = APIRouter()

# Message Schema
class ChatMessage(BaseModel):
    message: str

# Health check endpoint
@router.get("/api/health")
def health_check():
    return {"status": "ok"}

# Flag for chat endpoint
flag = False

# Chat endpoint
@router.post("/api/chat")
async def chat(chat_message: ChatMessage):
    global flag
    if flag:
        logger.warning("Server is busy, rejecting request")
        return {"response": "server is busy"}

    flag = True
    try:
        response = await get_chatgpt_response(chat_message.message)
        return {"response": response}
    finally:
        flag = False