import random

BOT_RESPONSES = [
    "Hello! How can I assist you today?",
    "Hi there! What can I do for you?",
    "Hey! Need help with something?",
    "Greetings! How may I assist?",
    "Hi! What’s on your mind today?",
]

def get_random_response(message: str) -> str:
    return random.choice(BOT_RESPONSES)