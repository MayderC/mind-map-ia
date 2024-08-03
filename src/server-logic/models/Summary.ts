
import {Schema} from "mongoose";
import mongoose from 'mongoose';
import {ISummary} from "@/shared/interfaces/ISummary";


const summarySchema = new Schema<ISummary>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    maps: [{ type: Schema.Types.ObjectId, ref: 'Map' }],
    date: { type: Date, default: Date.now },
    words: { type: Number },
});

summarySchema.pre('save', function(next) {
    this.words = this.content.split(' ').length;
    next();
});

summarySchema.pre('findOneAndUpdate', function(next) {
    let update = this.getUpdate() as { $set?: { content?: string, words?: number } };
    if (update.$set && update.$set.content) {
        update.$set.words = update.$set.content.split(' ').length;
    }
    next();
});


export default mongoose.models.Summary || mongoose.model('Summary', summarySchema);