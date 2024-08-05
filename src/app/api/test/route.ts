import { getSummaryStream } from "@/server-logic/services/ia/llama3.service";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export const POST = async(req : Request, context : any) => {
    const body = await req.json();
    //questions string
    const questions = body.questions;

    //answers string
    console.log("TEST")
    const response = await getSummaryStream(questions);

    return NextResponse.json({response: response.text}, {
        headers: {
            "Content-Type": "text/plain",
            "Content-Disposition": `attachment; filename="summary.txt"`
        }
    });

}