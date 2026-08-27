import { useQuery } from "@tanstack/react-query";
import { JobsResponse } from "../types/jobs.types";
import { getJobs } from "../api/jobs.api";

export function useJobs() {
    return useQuery<JobsResponse>({
        queryKey: ["jobs"],
        queryFn: () => getJobs()
    });
}