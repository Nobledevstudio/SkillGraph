export type GlobalSearchResult = {
    types: string[];
    id: string;
    name?: string;
    title?: string;
    category?: string;
};

export type GlobalSearchResponse = {
    success: boolean;
    data: GlobalSearchResult[];
};