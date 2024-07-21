import { NextResponse } from "next/server";
import { updateMap } from "../../summaries/services";
import { getMapById } from "../services";


export const PUT = async (req: Request, context: any) => {
  const { mapId } = context.params;
  const { map } = await req.json();
  try {
    const updatedMap = await updateMap(mapId, map);
    return NextResponse.json({ map: updatedMap });
  } catch (e) {
    console.log(e);
    throw new Error("Error updating map by id");
  }
}

export const GET = async (req: Request, context: any) => {
  const { mapId } = context.params;
  try {
    const map = await getMapById(mapId);
    return NextResponse.json({ map });
  } catch (e) {
    console.log(e);
    throw new Error("Error getting map by id");
  }
}