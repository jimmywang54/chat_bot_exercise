# Chatbot Exercise

This is the # Chatbot Exercise

This is the main repository for the Chatbot Exercise project, which consists of a frontend, backend, and other relevant configurations. It is designed to demonstrate the creation of a simple chatbot application with a React frontend and a FastAPI backend.

## Project Structure

```
chat_bot_exercise/
│
├── backend/               # Backend code using FastAPI
│   ├── README.md          # Instructions specific to the backend
│   ├── requirements.txt   # List of needed Python packages or libraries
│   ├── .gitignore         # Git ignored files for the backend
│   ├── main.py            # Main FastAPI backend application file
│   └── api/               # Backend API logic (optional modular structure)
│       └── routes.py      # Route definitions for the API
│
├── frontend/              # Frontend code using React
│   ├── README.md          # Instructions specific to the frontend
│   ├── .gitignore         # Git ignored files for the frontend
│   ├── package.json       # Frontend dependencies and scripts
│   └── src/               # React source files
│       ├── components/    # React components
│       ├── App.js         # Main React application file
│       └── App.css        # Styling for the application
│
├── .gitignore             # General Git ignored files
├── README.md              # General project documentation (this file)
```

## Getting Started

### Prerequisites

1. **Node.js** (version 14+ recommended)
2. **Python** (version 3.8+)
3. **npm** (comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/chat_bot_exercise.git
   cd chat_bot_exercise
   ```

2. Follow the setup instructions in the respective `README.md` files inside the `backend` and `frontend` folders to configure and run the application.

## Running the Application

1. **Start the Backend**:
   - Navigate to the `backend/` folder and follow the instructions in its `README.md` file.
   - Run the FastAPI server to start the backend.

2. **Start the Frontend**:
   - Navigate to the `frontend/` folder and follow the instructions in its `README.md` file.
   - Start the React application.

3. Access the application by opening your browser at:
   ```
   http://localhost:3000
   ```

## Features

- A chatbot interface with a React frontend.
- A FastAPI backend for processing chat requests.
- Predefined responses for basic user queries.

## Additional Resources

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)