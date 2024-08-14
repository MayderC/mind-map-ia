import { getSummaryStream } from "@/server-logic/services/ia/llama3.service";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export const POST = async(req : Request, context : any) => {
    const body = await req.json();
    //questions string
    const questions = body.questions;

    //answers string
    console.log("TEST")
    //const response = await getSummaryStream(questions);

    const response = {text: "test"}

    return NextResponse.json({response: response.text});

}