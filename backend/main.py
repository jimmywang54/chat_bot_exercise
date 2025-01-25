
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Health check endpoint
@app.get("/api/health")
def health_check():
    return {"status": "ok"}