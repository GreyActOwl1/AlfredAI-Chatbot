// 'use client'
// import { useChat } from 'ai/react';

// const GeminiDemo: React.FC = () => {
//   const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
//     api: '/api/chat',
//     initialMessages: [],
//   });

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Gemini Integration</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           className="border p-2 mb-4 w-full"
//           placeholder="Enter your prompt"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Generating...' : 'Submit'}
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-4">{error.message}</p>}
//       {messages.length != 0 && (
//         <div className="mt-4 p-4 border rounded bg">
//             {messages.map(m => (
//               <pre key={m.id} className="whitespace-pre-wrap break-words max-w-full">
//                 {m.role === 'user' ? 'User: ' : 'AI: '}
//                 {m.content}
//               </pre>
//             ))}
//         </div>
//       )}

//     </div>
//   );
// };

// export default GeminiDemo;



'use client'
import { useChat } from 'ai/react';

const GeminiDemo: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    initialMessages: [],
  });

  return (
    <div className="min-h-screen w-full pb-12 p-0 md:p-8 bg-white dark:bg-black">
    {error && <p className="text-red-500 mt-4">{error.message}</p>}
      {messages.length != 0 && (
        <div className="mt-4 p-4 md:p-8 border rounded  bg-gray-100 dark:bg-gray-100  text-gray-950">
            {messages.map(m => (
              <pre key={m.id} className="whitespace-pre-wrap break-words max-w-full">
                {m.role === 'user' ? 'User: ' : 'AI: '}
                {m.content}
              </pre>
            ))}
        </div>
      )}
    <form onSubmit={handleSubmit} className="flex justify-between w-full h-12 border mt-8 border-gray-500">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border p-2 w-[75%] md:w-[90%] text-gray-950 dark:text-white outline-none h-full"
          placeholder="Enter your prompt"
        />
        <button
          type="submit"
          className="bg-blue-700 text-sm md:text-md p-1 text-white w-[25%] md:w-[10%] h-full hover:bg-blue-500"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Submit'}
        </button>
      </form>
      

    </div>
  );
};

export default GeminiDemo;