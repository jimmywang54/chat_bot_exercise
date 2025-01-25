
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Message Schema
class ChatMessage(BaseModel):
    message: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/api/health")
def health_check():
    return {"status": "ok"}

# Chat endpoints
@app.post("/api/chat")
def chat(chat_message: ChatMessage):
    resposne = "Hi there!"

    return {"response": resposne}