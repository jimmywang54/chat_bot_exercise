# Chatbot Frontend

This is the frontend application for the Chatbot Exercise project, built using [Create React App](https://github.com/facebook/create-react-app). It serves as the user interface for interacting with the chatbot.

---

## **Getting Started**

### Prerequisites

Before running the application, ensure you have the following installed:
- Node.js (14+)
- npm (comes with Node.js)

### Setup Instructions

1. **Install Dependencies**:
   Navigate to the `frontend` folder and install the required dependencies:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   Run the following command to start the application in development mode:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

3. Ensure the backend is running to handle API requests. The backend is expected to run on [http://localhost:8000](http://localhost:8000).

---

## **Available Scripts**

In the project directory, you can run the following commands:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page reloads automatically when changes are made to the source code.\
You may also see lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.\
Run unit tests for components and functionality.

### `npm run build`
Builds the app for production to the `build` folder.\
Optimizes the build for the best performance by minifying and bundling the code.

### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

This command copies all the configuration files and dependencies into your project, allowing full customization.

---

## **Project Structure**

```
frontend/
├── public/               # Static public assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   │   ├── Chat.js       # Main chat component
│   │   ├── Input.js      # Message input component
│   │   ├── Message.js    # Individual message component
│   │   └── MessageList.js # List of messages
│   ├── App.js            # Main application entry point
│   ├── App.css           # Styling for the application
│   ├── constants.js      # Application constants (e.g., API URLs)
│   ├── api.js            # API abstraction for backend communication
│   └── index.js          # Application bootstrap
├── .gitignore            # Git ignored files
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

---

## **Features**

- Clean UI for chatting with the bot.
- Input with "Enter" key submission and button click support.
- "Send" button disabled when input is empty.
- Responsive design using Tailwind CSS.

---

## **Tailwind CSS Integration**

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. To make customizations:
1. Modify the `tailwind.config.js` file.
2. Add or update Tailwind classes directly in your components.

---

## **Testing**

This project includes unit tests for the components using **React Testing Library** and **Jest**. To run the tests:
```bash
npm test
```

---

## **Deployment**

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `build/` folder to your hosting platform (e.g., [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)).
