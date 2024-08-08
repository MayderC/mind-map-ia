import {Summary, User} from '@/server-logic/models';
import {deleteSummaryById} from "@/app/api/summaries/services";
import {ISummary} from "@/shared/interfaces/ISummary";
import { getSummary } from './ia/llama3.service';

export const getSummariesByUserId = async (userId: string) => {
    try {
        const user = await User.findById(userId).populate('summaries');
        return user.summaries;
    }catch (e) {
        console.log(e)
        throw new Error('Error getting summaries by user id');
    }
}

export const saveSummary = async (summary: ISummary) => {
    try {
        summary.content = await getSummary(summary.content);
        const summaryCreated = await Summary.create(summary);

        await summaryCreated.save();
        return summaryCreated.toObject(); 
    }catch (e) {
        console.log(e)
        throw new Error('Error saving summary');
    }
}

export const addSummaryToUser = async (userId: string, summaryId: string) => {
    try {
        const user = await User.findByIdAndUpdate(userId, {$push: {summaries: summaryId}}, {new: true});
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

export const removeMapFromSummary = async (summaryId: string, mapId: string) => {
    try {
        const summary = await Summary.findById(summaryId)
        summary.maps = summary.maps.filter((map: string) => map !== mapId);
        return await summary.save();
    }catch (e) {
        throw new Error('Error removing map from summary');
    }
}