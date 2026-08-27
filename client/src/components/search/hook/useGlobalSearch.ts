import { useQuery } from "@tanstack/react-query";
import { globalSearch } from "../api/search.api";
import { GlobalSearchResponse } from "../types/searcg.types";


export function useGlobalSearch(searchTerm = "") {
    return useQuery<GlobalSearchResponse>({
        queryKey: ["global-search", searchTerm],
        queryFn: () => globalSearch(searchTerm),
        enabled: Boolean(searchTerm.trim()),
    });
}