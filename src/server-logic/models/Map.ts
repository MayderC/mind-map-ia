import mongoose, {Schema} from "mongoose";
import { IMap } from "@/shared/interfaces/IMap";

// the gojsStructure is a JSON object defined by the user summarization
// depending on the user's input, the structure of the object will change
// we don't know the structure of this object, so we define it as any

const mapSchema = new Schema<IMap>({
    title: { type: String, required: true },
    description: { type: String},
    type: { type: String, required: true },
    mermaidSyntax: { type: String, required: true },
    gojsStructure: { type: Object }
});
export default mongoose.models.Map || mongoose.model('Map', mapSchema);