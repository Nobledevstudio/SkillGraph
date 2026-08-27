import { api } from "@/lib/axios";
import { JobResponse, JobsResponse } from "../types/jobs.types";


export const getJobs = async (): Promise<JobsResponse> => {
    try {
        const response = await api.get<JobsResponse>("/jobs");

        return response.data;
    } catch (error) {
        console.error("Failed to fetch jobs:", error);
        throw error;
    }
};

export const getJob = async ( jobId: string ): Promise<JobResponse> => {
    try {
        const response = await api.get<JobResponse>( `/jobs/${jobId}`);

         console.log("JOB RESPONSE:", response.data);

        return response.data;
    } catch (error) {
        console.error(`Failed to fetch job ${jobId}:`, error);
        throw error;
    }
};