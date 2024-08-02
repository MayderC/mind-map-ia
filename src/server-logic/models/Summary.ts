
import {Schema} from "mongoose";
import mongoose from 'mongoose';
import {ISummary} from "@/shared/interfaces/ISummary";


const summarySchema = new Schema<ISummary>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    maps: [{ type: Schema.Types.ObjectId, ref: 'Map' }],
});


export default mongoose.models.Summary || mongoose.model('Summary', summarySchema);