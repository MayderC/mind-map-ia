import {NextResponse} from "next/server";
import {addSummaryToUser, deleteSummaryFromUser, getSummariesByUserId, saveSummary} from "@/app/api/users/services";
import {findUserById} from "@/app/api/auth/service";

export const GET = async (req: Request, context: any) => {
    const userId = context.params['userId']

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


