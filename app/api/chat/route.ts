import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  try {
    const result = await streamText({
      model: google('models/gemini-1.5-pro-latest'),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error fetching data from Gemini AI:', error);
  }

}