// src/components/Chat.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import Input from './MessageInput';
import { sendMessageToBackend } from '../api';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const botResponse = await sendMessageToBackend(input);
      const botMessage = { role: 'bot', content: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <div className='flex flex-col h-screen bg-gray-100 p-4'>
      <MessageList messages={messages} />
      <Input value={input} onChange={setInput} onSend={handleSend} />
    </div>
  );
};

export default Chat;
