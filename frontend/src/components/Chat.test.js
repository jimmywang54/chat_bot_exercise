// src/components/Chat.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from './Chat';
import { sendMessageToBackend } from '../api';

// Mock the API call
jest.mock('../api', () => ({
  sendMessageToBackend: jest.fn()
}));

describe('Chat Component', () => {
  it('renders the Chat UI correctly', () => {
    render(<Chat />);
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('sends a message and displays bot response', async () => {
    sendMessageToBackend.mockResolvedValue('Hello from the bot!');

    render(<Chat />);
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    // Type a message and send it
    fireEvent.change(input, { target: { value: 'Hello bot' } });
    fireEvent.click(sendButton);

    // Check if the user message is displayed
    expect(screen.getByText('Hello bot')).toBeInTheDocument();

    // Wait for the bot response
    await waitFor(() => {
      expect(screen.getByText('Hello from the bot!')).toBeInTheDocument();
    });
  });
});
