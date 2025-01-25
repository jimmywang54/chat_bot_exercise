// src/components/Input.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './MessageInput';

describe('Input Component', () => {
  it('renders the input and button', () => {
    render(<Input value='' onChange={() => {}} onSend={() => {}} />);
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('calls onChange when typing in the input', () => {
    const mockOnChange = jest.fn();
    render(<Input value='' onChange={mockOnChange} onSend={() => {}} />);

    const input = screen.getByPlaceholderText('Type your message...');
    fireEvent.change(input, { target: { value: 'Hello bot' } });

    expect(mockOnChange).toHaveBeenCalledWith('Hello bot');
  });

  it('calls onSend when clicking the button', () => {
    const mockOnSend = jest.fn();
    render(<Input value='Hello bot' onChange={() => {}} onSend={mockOnSend} />);

    const sendButton = screen.getByRole('button', { name: /send/i });
    fireEvent.click(sendButton);

    expect(mockOnSend).toHaveBeenCalled();
  });
});
