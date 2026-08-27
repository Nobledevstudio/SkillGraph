import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api/companies.api";
import { CompanyJobsResponse } from "../types/companies.types";


export function useCompanies() {
    return useQuery< CompanyJobsResponse>({
        queryKey: ["companies"],
        queryFn: getCompanies,
    });
}