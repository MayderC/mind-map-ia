
import {Schema} from "mongoose";
import {IMap} from "@/models/Map";
import mongoose from 'mongoose';

export interface ISummary {
    _id?: string;
    title: string;
    description: string;
    content: string;
    maps?: IMap[];
}

const summarySchema = new Schema<ISummary>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    maps: [{ type: Schema.Types.ObjectId, ref: 'Map' }],
});


export default mongoose.models.Summary || mongoose.model('Summary', summarySchema);