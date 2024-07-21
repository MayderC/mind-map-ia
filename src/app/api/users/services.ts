import {Summary, User} from '@/models';
import {deleteSummaryById} from "@/app/api/summary/services";
import {ISummary} from "@/models/Summary";

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
        const user = await User.findByIdAndUpdate(userId, {$push: {summaries: summaryId}}, {new: true});
        user.summaries.push(summaryId);
        return await user.save();
    }catch (e) {
        console.log(e)
        throw new Error('Error adding summary to user');
    }
}


export const deleteSummaryFromUser = async (userId: string, summaryId: string) => {
    try {
        await deleteSummaryById(summaryId);
        const user = await User.findById(userId);
        user.summaries = user.summaries.filter((summary: ISummary) => summary.toString() !== summaryId);
        return await user.save();
    }catch (e) {
        console.log(e)
        throw new Error('Error deleting summary from user');
    }
}