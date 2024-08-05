import http from "./http";
import { ISummary } from "@/shared/interfaces/ISummary";
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


export const addSummary = async (userId: string, summary: ISummary): Promise<HttpResponse<ISummary | null>> => {
  try{
    const response = await http.post("/users/" + userId + "/summaries", {summary});
    return {data: response.data.summary, ok: true};
  }catch (e) {
    return {data: null, ok: false};
  }
};

export const deleteSummary = async (userId: string, summaryId: string): Promise<HttpResponse<ISummary | null>> => {
  try{
    const response = await http.delete("/users/" + userId + "/summaries/" + summaryId);
    return {data: response.data.summary, ok: true};
  }catch (e) {
    return {data: null, ok: false};
  }
};

export const getSummaryById = async (summaryId: string): Promise<HttpResponse<ISummary | null>> => {
  try{
    const response = await http.get("/summaries/" + summaryId);
    return {data: response.data, ok: true};
  }catch (e) {
    return {data: null, ok: false};
  }
}