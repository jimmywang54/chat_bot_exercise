import random
import logging
from typing import Optional
from openai import AsyncOpenAI
from decouple import config

# Configure logger
logger = logging.getLogger(__name__)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

BOT_RESPONSES = [
    "Hello! How can I assist you today?",
    "Hi there! What can I do for you?",
    "Hey! Need help with something?",
    "Greetings! How may I assist?",
    "Hi! What's on your mind today?",
]

# Initialize AsyncOpenAI client with minimal configuration
client = AsyncOpenAI(
    api_key=config('OPENAI_API_KEY'),
    base_url="https://api.openai.com/v1"  # Explicitly set the base URL
)

async def get_chatgpt_response(message: str) -> str:
    try:
        logger.info(f"Sending request to ChatGPT: {message}")
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": message}
            ],
            max_tokens=1000,
            temperature=0.7
        )
        logger.info(f"ChatGPT response: {response.choices[0].message.content}")
        return response.choices[0].message.content
    except Exception as e:
        logger.error(f"Error calling ChatGPT API: {str(e)}")
        # Fallback to random response if API call fails
        return random.choice(BOT_RESPONSES)
