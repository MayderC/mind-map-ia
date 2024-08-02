import {NextResponse} from "next/server";
import {addSummaryToUser,  getSummariesByUserId, saveSummary} from "@/server-logic/services/summary.service";
import {findUserById} from "@/server-logic/services/auth.service";
import { cookies } from "next/headers";
import {decodeJwt} from 'jose'

export const GET = async (req: Request, context: any) => {
    const userId = context.params['userId']

    console.log('GET SUMMARIES', userId)

    try {
        const user = await findUserById(userId)
        if (!user) return NextResponse.json({message: 'User not found'}, {status: 404})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error getting user'}, {status: 400})
    }
    try {
        const response = await  getSummariesByUserId(userId)
        return NextResponse.json({summaries: response})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error getting summaries'}, {status: 400})
    }
}

export const POST = async (req: Request, context: any) => {
    const userId = context.params['userId']
    const {summary} = await req.json()
    
    if (!summary) return NextResponse.json({message: 'Summary is required'}, {status: 400})
    
    try {
        const response = await  saveSummary(summary)
        await addSummaryToUser(userId, response._id)
        return NextResponse.json({summary: response})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error getting summaries'}, {status: 400})
    }
}


