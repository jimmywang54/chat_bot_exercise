const Message = ({ content, role }) => {
  const isUser = role === 'user';
  return (
    <div className={`mb-2 ${isUser ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block px-4 py-2 rounded ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>{content}</div>
    </div>
  );
};

export default Message;
