import {NextResponse} from "next/server";
import {getMapsBySummaryId, saveMap, saveMapToSummary} from "@/app/api/summaries/services";


export async function GET(req: Request, context: any) {
    try {
        const summaryId = context.params['summaryId']
        const summary = await getMapsBySummaryId(summaryId)
        return NextResponse.json({maps: summary.maps})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error getting maps'}, {status: 400})
    }
}

export async function POST(req: Request, context: any) {
    
    const summaryId = context.params['summaryId']
    const {map} = await req.json()
    
    if (!map) return NextResponse.json({message: 'Map is required'}, {status: 400})
    
    try {
        const response = await saveMap(map)
        await saveMapToSummary(summaryId, response._id)
        return NextResponse.json({map: response})
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error saving map'}, {status: 400})
    }
    
}