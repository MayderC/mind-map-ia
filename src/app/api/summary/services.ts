import {Summary} from '@/models';


export const getSummaryById = async (summaryId: string) => {
    try {
        return await Summary.findById(summaryId);
    }catch (e) {
        console.log(e)
        throw new Error('Error getting summary by id');
    }
}