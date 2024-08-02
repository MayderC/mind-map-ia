import { Schema } from 'mongoose';
import {ROLES} from "@/shared/constants";
import mongoose from 'mongoose';
import { IUser } from '@/shared/interfaces/IUser';


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