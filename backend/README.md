# Backend Setup

## Requirements
1. Python 3.8+
2. Pip 24.3.1
3. OpenAI API key

## Environment Setup
1. Create a `.env` file in the backend directory:
    ```bash
    cp .env.example .env
    ```
2. Add your OpenAI API key to the `.env` file:
    ```
    OPENAI_API_KEY=your_api_key_here
    ```

## Creating a Virtual Environment
1. Create a virtual environment:
    ```bash
    python -m venv venv
    ```
2. Activate the virtual environment:
- **Windows**:
    ```bash
    venv\Scripts\activate
    ```
- **macOS/Linux**:
    ```bash
    source venv/bin/activate
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Running the Backend Service
1. Start the server using `uvicorn`:
    ```bash
    uvicorn main:app --reload
    ```
2. The backend service listen to `http://127.0.0.1:8000`

## Endpoints
1. **Get /api/health**
    - Health check endpoint to ensure the server is running.
    - Example:
        ```bash
        curl http://127.0.0.1:8000/api/health
        ```
    - Response:
        ```json
        {
            "status": "ok"
        }
        ```

2. **POST /api/chat**
    - Accepts a JSON payload with the user's message and returns a ChatGPT-powered response
    - Example:
        ```bash
        curl -X POST http://127.0.0.1:8000/api/chat \
             -H "Content-Type: application/json" \
             -d '{"message": "hello"}'
        ```
    - Response:
        ```json
        {
            "response": "Hello! How can I assist you today?"
        }
        ```