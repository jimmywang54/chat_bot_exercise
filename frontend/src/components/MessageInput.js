const MessageInput = ({ value, onChange, onSend }) => {
  return (
    <div className='mt-4 flex'>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='flex-1 border rounded p-2'
        placeholder='Type your message...'
      />
      <button onClick={onSend} className='ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
