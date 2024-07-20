import {NextResponse} from "next/server";


export async function GET(req: Request, context: any) {
    
    const url = new URL(req.url)
    
    const ctx = context.params['id']
    
    console.log(url)
    
    return NextResponse.json({message: ctx})
}