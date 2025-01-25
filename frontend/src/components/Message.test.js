import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Message Component', () => {
  it('renders text alignment correctly for user and bot', () => {
    const userContent = 'User message';
    const botContent = 'Bot message';

    // Render user message
    const { rerender } = render(<Message content={userContent} role="user" />);
    const userMessageElement = screen.getByText(userContent);
    expect(userMessageElement.closest('div')).toHaveClass('text-white');

    // Render bot message
    rerender(<Message content={botContent} role="bot" />);
    const botMessageElement = screen.getByText(botContent);
    expect(botMessageElement.closest('div')).toHaveClass('text-black');
  });
});