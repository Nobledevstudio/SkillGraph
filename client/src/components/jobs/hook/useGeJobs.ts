import { useQuery } from "@tanstack/react-query";
import { JobResponse } from "../types/jobs.types";
import { getJob } from "../api/jobs.api";



export function useGetJob(jobId: string) {
    return useQuery<JobResponse>({
        queryKey: ["job", jobId],
        queryFn: () => getJob(jobId),
        enabled: Boolean(jobId),
    });
}