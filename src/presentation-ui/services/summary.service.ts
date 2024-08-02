import { ISummary } from "@/shared/interfaces/ISummary";
import http from "./http";
import { HttpResponse } from './response.interface';


export const getSummaries = async (userId: string): Promise<HttpResponse<ISummary[]>> => {
  console.log(userId, "GET")
  try{
    const response = await http.get("/users/" + userId + "/summaries");
    return {data: response.data.summaries, ok: true};
  }catch (e) {
    return {data: [], ok: false};
  }
};