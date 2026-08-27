import { api } from "@/lib/axios";
import { GlobalSearchResponse } from "../types/searcg.types";

export const globalSearch = async (
    searchTerm: string
): Promise<GlobalSearchResponse> => {
    const response = await api.get<GlobalSearchResponse>("/search", {
        params: {
            searchTerm,
        },
    });

    return response.data;
};