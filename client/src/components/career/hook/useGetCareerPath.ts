import { useQuery } from "@tanstack/react-query";

import { getCareerPath } from "../api/career.api";

export const useGetCareerPath = (personId: string) => {
    return useQuery({
        queryKey: ["career-path", personId],
        queryFn: () => getCareerPath(personId),
        enabled: Boolean(personId),
    });
};