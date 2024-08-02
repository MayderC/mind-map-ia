import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: process.env.GROQ_API_URL,
  apiKey: process.env.GROQ_API_KEY,
});

export { groq };