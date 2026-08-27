import { useQuery } from "@tanstack/react-query";
import { getCompaniesForSkill } from "../api/skills.api";


export function useGetCompaniesForSkill(skillId: string) {
    return useQuery({
        queryKey: ["skill-companies", skillId],
        queryFn: () => getCompaniesForSkill(skillId),
        enabled: !!skillId,
    });
}