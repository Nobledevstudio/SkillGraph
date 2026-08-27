import { api } from "@/lib/axios";

import {
    CompaniesResponse,
    CompanyJobsResponse,
} from "../types/companies.types";

export const getCompanies = async (): Promise<CompaniesResponse> => {
    try {
        const response = await api.get<CompaniesResponse>(
            "/companies"
        );

        return response.data;
    } catch (error) {
        console.error("Failed to fetch companies:", error);
        throw error;
    }
};

export const getCompanyJobs = async (
    companyId: string
): Promise<CompanyJobsResponse> => {
    try {
        const response = await api.get<CompanyJobsResponse>(
            `/companies/${companyId}/jobs`
        );

        return response.data;
    } catch (error) {
        console.error(
            `Failed to fetch jobs for company ${companyId}:`,
            error
        );
        throw error;
    }
};