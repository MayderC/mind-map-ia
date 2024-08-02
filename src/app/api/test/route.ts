import { question } from "@/server-logic/services/ia/llama3.service";
import { NextResponse } from "next/server";

export const POST = async(req : Request, context : any) => {
    const body = await req.json();
    //questions string
    const questions = body.questions;

    //answers string
    const answers = await question(questions);

    return NextResponse.json({answers});

}