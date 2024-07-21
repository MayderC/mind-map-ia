import { Map } from "@/models";


export const getMapById = async (mapId: string) => {
    try {
        return await Map.findById(mapId);
    } catch (e) {
        console.log(e);
        throw new Error("Error getting map by id");
    }
}