// src/components/MessageList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageList from './MessageList';

describe('MessageList Component', () => {
  it('renders a list of messages', () => {
    const messages = [
      { role: 'user', content: 'Hello bot' },
      { role: 'bot', content: 'Hello user' }
    ];

    render(<MessageList messages={messages} />);

    expect(screen.getByText('Hello bot')).toBeInTheDocument();
    expect(screen.getByText('Hello user')).toBeInTheDocument();
  });

  it('renders no messages when list is empty', () => {
    render(<MessageList messages={[]} />);
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });
});
