import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <div className='flex-1 overflow-y-auto border rounded-lg p-4 bg-white'>
      {messages.map((msg, index) => (
        <Message key={index} content={msg.content} role={msg.role} />
      ))}
    </div>
  );
};

export default MessageList;
