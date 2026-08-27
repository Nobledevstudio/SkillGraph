import { useQuery } from "@tanstack/react-query";
import { getCompanyJobs } from "../api/companies.api";
import type { CompanyJobsResponse } from "../types/companies.types";

export function useCompanyJobs(companyId: string) {
    return useQuery<CompanyJobsResponse>({
        queryKey: ["company-jobs", companyId],
        queryFn: () => getCompanyJobs(companyId),
        enabled: Boolean(companyId),
    });
}