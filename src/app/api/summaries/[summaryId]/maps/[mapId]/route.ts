import { NextResponse } from "next/server";
import { updateMap } from "../../../services";
import { removeMapById } from "@/server-logic/services/map.service";
import { removeMapFromSummary } from "@/server-logic/services/summary.service";

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

export const DELETE = async (req: Request, context: any) => {
  const { mapId, summaryId } = context.params;
  try {
    await removeMapById(mapId);
    await removeMapFromSummary(summaryId, mapId);
    return NextResponse.json({ message: 'Map deleted' });
  } catch (e) {
    console.log(e);
    throw new Error("Error deleting map by id");
  }
}