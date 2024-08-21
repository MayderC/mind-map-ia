import { CreateMap } from "@/presentation-ui/interfaces/index";
import http from "./http";
import { HttpResponse } from "./response.interface";
import { IMap } from "@/shared/interfaces/IMap";


export const createMapFromSummary = async(summaryId: string, data: CreateMap): Promise<HttpResponse<IMap | null>> => {
  try {
    const response = await http.post("/summaries/" + summaryId + "/maps", {map: data});
    return {data: response.data.map, ok: true};
  } catch (e) {
    return {data: null, ok: false};
  }

}

export const removeMapFromSummary = async(summaryId: string, mapId: string): Promise<HttpResponse<IMap | null>> => {
  try {
    const response = await http.delete("/summaries/" + summaryId + "/maps/" + mapId);
    return {data: response.data.map, ok: true};
  } catch (e) {
    return {data: null, ok: false};
  }
}


export const createExcalidrawMap = async (userId: string, context: string): Promise<HttpResponse<any>> => {
  try {
    const response = await http.post("/users/" + userId + "/maps", {context});
    return {data: response.data, ok: true};
  } catch (e) {
    return {data: null, ok: false};
  }
}