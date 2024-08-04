import {NextResponse} from "next/server";
import {getSummaryById, updateSummaryById} from "@/app/api/summaries/services";

export const GET = async (req: Request, context: any) => {
    try {
        const summaryId = context.params['summaryId']
        const summary = await getSummaryById(summaryId)
        if (!summary) return NextResponse.json({message: 'Summary not found'}, {status: 404})
        return NextResponse.json(summary)
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error getting summary'}, {status: 400})
    }
}

export const PUT = async (req: Request, context: any) => {
    const summaryId = context.params['summaryId']
    const body = await req.json()

    const summary = await updateSummaryById(summaryId, body)
    return NextResponse.json(summary)
}
