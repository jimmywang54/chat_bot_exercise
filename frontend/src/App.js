import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

const SERVICE_URL = 'http://localhost:8000';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(`${SERVICE_URL}/api/chat`, {
        message: input
      });

      const botMessage = { role: 'bot', content: response.data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response: ', error);
    }

    setInput('');
  };

  return (
    <div className='flex flex-col h-screen bg-gray-100 p-4'>
      <div className='flex-1 overflow-y-auto border rounded-lg p-4 bg-white'>
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4 flex'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='flex-1 border rounded p-2'
          placeholder='Type your message...'
        />
        <button onClick={sendMessage} className='ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
