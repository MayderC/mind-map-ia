import {NextResponse} from "next/server";
import {findUserById} from "@/app/api/auth/service";
import {deleteSummaryFromUser} from "@/app/api/users/services";


export const DELETE = async (req: Request, context: any) => {
    const userId = context.params['userId']
    const summaryId = context.params['summaryId']

    if (!summaryId) return NextResponse.json({message: 'Summary id is required'}, {status: 400})
    if (!userId) return NextResponse.json({message: 'User id is required'}, {status: 400})

    try {
        const user = await findUserById(userId)
        if (!user) return NextResponse.json({message: 'User not found'}, {status: 404})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error getting user'}, {status: 400})
    }

    try {
        await deleteSummaryFromUser(userId, summaryId)
        return NextResponse.json({message: 'Summary deleted'}, {status: 200})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error deleting summary'}, {status: 400})
    }
}