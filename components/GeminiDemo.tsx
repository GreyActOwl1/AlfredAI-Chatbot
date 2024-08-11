/* /* // 'use client'
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

export default GeminiDemo; */

/* 'use client'
import { useChat } from 'ai/react';
import { title } from "@/components/primitives";
import { useEffect } from 'react';interface Message {
  id: string;
  role: string;
  content: string;
  createdAt: string | Date | undefined;
}

// Define an interface for your props
interface MyComponentProps {
  chatName: string;
  multiMessages: Message[];
  setMultiMessages: (messages: Message[]) => void;
}


const GeminiDemo: React.FC<MyComponentProps> = ({chatName, multiMessages, setMultiMessages}) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',initialMessages: multiMessages as [],
  });


  useEffect(() => {
    console.log("inside GeminiDemo useEffect");
    // when see a change in messages, update the parent component's state
    setMultiMessages(messages as Message[]);
  }, [messages]);

  useEffect(() => {
    console.log("messages when mounted: " + JSON.stringify(messages));
  }, [messages]);

  return (   <div className="md:p-4 md:w-[1200px]">
    <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">{chatName}</h1>

    {error && <p className="text-red-500 mt-4">{error.message}</p>}
    {messages.length != 0 && (
      <div className="mt-4 p-4 bg-gray-200 dark:bg-slate-900 w-full rounded-md ">
          {messages.map(m => (
            <pre key={m.id} className="whitespace-pre-wrap text-gray-950 dark:text-white break-words w-full">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </pre>
          ))}
      </div>
    )}
    
    <form onSubmit={handleSubmit} className='flex justify-between h-12 w-full bg-gray-100 dark:bg-black  border border-gray-400 mt-6'>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className=" h-full w-[75%] md:w-[90%] outline-none ml-2 bg-gray-100 dark:bg-black dark:text-white text-gray-950"
        placeholder="Enter your prompt"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white w-[25%] md:w-[10%] h-full text-sm md:text-md hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Submit'}
      </button>
    </form>
   

  </div>
);
};
export default GeminiDemo;
 */ 

'use client'
import { useChat } from 'ai/react';
import { title } from "@/components/primitives";
import { useEffect } from 'react';

interface Message {
  id: string;
  role: string;
  content: string;
  createdAt: string | Date | undefined;
}

// Define an interface for your props
interface MyComponentProps {
  chatName: string;
  multiMessages: Message[];
  setMultiMessages: (messages: Message[]) => void;
}

const GeminiDemo: React.FC<MyComponentProps> = ({ chatName, multiMessages, setMultiMessages }) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    initialMessages: multiMessages as [],
  });

  useEffect(() => {
    console.log("inside GeminiDemo useEffect");
    // Update the parent component's state when messages change
    setMultiMessages(messages as Message[]);
  }, [messages]);

  useEffect(() => {
    console.log("messages when mounted: " + JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 w-full bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">{chatName}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-lg">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded"
          placeholder="Enter your prompt"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-400"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error.message}</p>}
      {messages.length !== 0 && (
        <div className="mt-4 p-4 border rounded bg-white dark:bg-gray-800 w-full max-w-lg text-gray-900 dark:text-white">
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
