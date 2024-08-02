import {ISummary} from "@/shared/interfaces/ISummary";

export interface SummaryRequest extends Omit<ISummary, '_id' | 'maps'> {}
export interface SummaryResponse extends ISummary {}