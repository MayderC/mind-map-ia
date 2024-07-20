import {NextResponse} from "next/server";
import {getSummaryById} from "@/app/api/summary/services";

export const GET = async (req: Request, context: any) => {
    
    const summaryId = context.params['id']
    const summary = await getSummaryById(summaryId)
    return NextResponse.json(summary)
}