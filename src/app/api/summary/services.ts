import {Summary, Map} from '@/models';

export const getSummaryById = async (summaryId: string) => {
    try {
        return await Summary.findById(summaryId);
    }catch (e) {
        console.log(e)
        throw new Error('Error getting summary by id');
    }
}

export const updateSummaryById = async (summaryId: string, summary: any) => {
    try {
        return await Summary.findByIdAndUpdate(summaryId, summary, {new: true});
    }catch (e) {
        console.log(e)
        throw new Error('Error updating summary by id');
    }
}

export const deleteSummaryById = async (summaryId: string) => {
    try {
        return await Summary.findByIdAndDelete(summaryId);
    }catch (e) {
        console.log(e)
        throw new Error('Error deleting summary by id');
    }
}

export const getMapsBySummaryId = async (summaryId: string) => {
    try {
        return await Summary.findById(summaryId).populate('maps').exec();
    }catch (e) {
        console.log(e)
        throw new Error('Error getting maps by summary id');
    }
}

export const saveMap = async (map: any) => {
    try {
        const mapCreated = await Map.create(map);
        return  mapCreated.save();
    }catch (e) {
        console.log(e)
        throw new Error('Error saving map');
    }

}
export const saveMapToSummary = async (summaryId: string, mapId: any) => {
    try {
        const summary = await Summary.findById(summaryId);
        summary.maps.push(mapId);
        return summary.save();
    }catch (e) {
        console.log(e)
        throw new Error('Error saving map to summary');
    }
}