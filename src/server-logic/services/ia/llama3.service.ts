import { generateText } from 'ai';
import { groq } from './ia.providers';
import { IA_ALLOWED_MODELS } from './models';
import { TEMPLATES } from './template-prompts';


export const question = async(question: string)=> {
  const model = groq(IA_ALLOWED_MODELS.LLAMA_31.INSTANT);
  const { text } = await generateText({
    model: model,
    prompt: question,
    maxTokens: 5000,
  });
  return text
} 


export const getSummary = async(userText: string)=> {
  const model = groq(IA_ALLOWED_MODELS.LLAMA_31.INSTANT);
  const { text } = await generateText({
    model: model,
    prompt: TEMPLATES.SUMMARY(userText),
  });
  return text
}

export const getMermaidTemplate = async(summary: string)=> {
  const model = groq(IA_ALLOWED_MODELS.LLAMA_31.INSTANT);
  const { text } = await generateText({
    model: model,
    prompt: TEMPLATES.MERMAID(summary),
  });
  return text
}