'use client'
import { useChat } from 'ai/react';

const GeminiDemo: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    initialMessages: [],
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gemini Integration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full"
          placeholder="Enter your prompt"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error.message}</p>}
      {messages.length != 0 && (
        <div className="mt-4 p-4 border rounded bg">
            {messages.map(m => (
              <pre key={m.id} className="whitespace-pre-wrap break-words max-w-full">
                {m.role === 'user' ? 'User: ' : 'AI: '}
                {m.content}
              </pre>
            ))}
        </div>
      )}

    </div>
  );
};

export default GeminiDemo;