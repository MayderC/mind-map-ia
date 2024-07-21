import {ISummary} from "@/models/Summary";

export interface SummaryRequest extends Omit<ISummary, '_id' | 'maps'> {}
export interface SummaryResponse extends ISummary {}