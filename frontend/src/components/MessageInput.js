const MessageInput = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      onSend();
    }
  };

  return (
    <div className='mt-4 flex'>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className='flex-1 border rounded p-2'
        placeholder='Type your message...'
      />
      <button
        onClick={onSend}
        disabled={value.trim() === ''}
        className={`ml-2 px-4 py-2 rounded ${
          value.trim() === '' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'
        }`}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
