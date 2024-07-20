import {NextResponse} from "next/server";


export const GET = async (req: Request, context: any) => {
    return NextResponse.json({message: 'Hello World SUMARI ID'})
}