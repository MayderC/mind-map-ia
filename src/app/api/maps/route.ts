import { NextResponse } from "next/server"
import { openai } from '@ai-sdk/openai';
import { generateObject, generateText } from 'ai';
import { shemeDiagramType } from "@/server-logic/services/ia/scheme-models";
import { TEMPLATES } from "@/server-logic/services/ia/template-prompts";
import { MAP_TYPES } from "@/shared/constants";

export async function POST(req: Request) {
  const {context} = await req.json()
  if (!context) return NextResponse.json({message: 'Context is required'}, {status: 400})
  try {
    const { object } = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: shemeDiagramType,
      prompt: TEMPLATES.EXCLIDRAW_TYPE(context),
    });

    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt: TEMPLATES.MERMAID(context, object.type as MAP_TYPES),
    });


    return NextResponse.json({text: text})
  }catch (e) {
    console.log(e)
    return NextResponse.json({message: 'Error creating map'}, {status: 400})
  }
}