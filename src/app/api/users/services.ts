import {Summary, User} from '@/models';

export const getSummariesByUserId = async (userId: string) => {
    try {
        const user = await User.findById(userId).populate('summaries');
        return user.summaries;
    }catch (e) {
        console.log(e)
        throw new Error('Error getting summaries by user id');
    }
}

export const saveSummary = async (summary: any) => {
    try {
        const summaryCreated = await Summary.create(summary);
        return await summaryCreated.save();
    }catch (e) {
        console.log(e)
        throw new Error('Error saving summary');
    }
}

export const addSummaryToUser = async (userId: string, summaryId: string) => {
    try {
        const user = await User.findById(userId);
        user.summaries.push(summaryId);
        return await user.save();
    }catch (e) {
        console.log(e)
        throw new Error('Error adding summary to user');
    }
}