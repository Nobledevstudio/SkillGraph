import { useQuery } from "@tanstack/react-query";

import { getCompanies } from "../api/companies.api";
import { CompaniesResponse } from "../types/companies.types";

export function useCompanies() {
    return useQuery<CompaniesResponse>({
        queryKey: ["companies"],
        queryFn: getCompanies,
    });
}