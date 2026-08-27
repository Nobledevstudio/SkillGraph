import { useQuery } from "@tanstack/react-query";
import { getSkill } from "../api/skills.api";



export function useGetSkill(skillId: string) {
    return useQuery({
        queryKey: ["skill", skillId],
        queryFn: () => getSkill(skillId),
        enabled: !!skillId,
    });
}