import { Schema } from 'mongoose';
import {ISummary} from './Summary';
import {ROLES} from "@/utils/constants";
import mongoose from 'mongoose';
interface IUser {
    _id?: string;
    name: string;
    email: string;
    role?: ROLES[];
    summaries?: ISummary[];
    password: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { 
        type: [String],
        default: [ROLES.USER],
    },
    password: { type: String, required: true },
    summaries: [{ type: Schema.Types.ObjectId, ref: 'Summary' }],
});

export default mongoose.models.User || mongoose.model('User', userSchema);