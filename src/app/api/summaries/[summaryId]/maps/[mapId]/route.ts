import { NextResponse } from "next/server";
import { updateMap } from "../../../services";

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