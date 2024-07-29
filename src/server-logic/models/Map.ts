import mongoose, {Schema} from "mongoose";


// the gojsStructure is a JSON object defined by the user summarization
// depending on the user's input, the structure of the object will change
// we don't know the structure of this object, so we define it as any
export interface IMap {
    _id?: string;
    title: string;
    description: string;
    type: string;
    mermaidSyntax: string;
    gojsStructure: any
}

const mapSchema = new Schema<IMap>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    mermaidSyntax: { type: String, required: true },
    gojsStructure: { type: Object, required: true }
});
export default mongoose.models.Map || mongoose.model('Map', mapSchema);