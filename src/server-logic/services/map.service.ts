import { Map } from "@/server-logic/models";


export const getMapById = async (mapId: string) => {
    try {
        return await Map.findById(mapId);
    } catch (e) {
        console.log(e);
        throw new Error("Error getting map by id");
    }
}

export const removeMapById = async (mapId: string) => {
    try {
        return await Map.findByIdAndDelete(mapId);
    } catch (e) {
        console.log(e);
        throw new Error("Error deleting map by id");
    }
}

