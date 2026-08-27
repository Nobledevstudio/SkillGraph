import { useQuery } from "@tanstack/react-query";

import { getPeople } from "../api/people.api";

export const useGetPeople = () => {
    return useQuery({
        queryKey: ["people"],
        queryFn: getPeople,
    });
};