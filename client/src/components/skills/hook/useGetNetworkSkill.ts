import { useQuery } from "@tanstack/react-query";
import { getSkillNetwork } from "../api/skills.api";


export function useGetSkillNetwork(skillId: string) {
    return useQuery({
        queryKey: ["skill-network", skillId],
        queryFn: () => getSkillNetwork(skillId),
        enabled: !!skillId,
    });
}