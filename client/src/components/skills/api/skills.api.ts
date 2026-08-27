import { api } from "@/lib/axios";

import type {
    SkillsResponse,
    SkillResponse,
    SkillNetworkResponse,
    SkillCompaniesResponse,
} from "../types/skills.types";

export async function getSkills(): Promise<SkillsResponse> {
    try {
        const response = await api.get<SkillsResponse>("/skills");

        return response.data;
    } catch (error) {
        console.error("Failed to fetch skills:", error);
        throw error;
    }
}

export async function getSkill(
    skillId: string
): Promise<SkillResponse> {
    try {
        const response = await api.get<SkillResponse>(
            `/skills/${skillId}`
        );

        return response.data;
    } catch (error) {
        console.error("Failed to fetch skill:", error);
        throw error;
    }
}

export async function getSkillNetwork(
    skillId: string
): Promise<SkillNetworkResponse> {
    try {
        const response = await api.get<SkillNetworkResponse>(
            `/skills/${skillId}/network`
        );

        return response.data;
    } catch (error) {
        console.error("Failed to fetch skill network:", error);
        throw error;
    }
}

export async function getCompaniesForSkill(
    skillId: string
): Promise<SkillCompaniesResponse> {
    try {
        const response = await api.get<SkillCompaniesResponse>(
            `/skills/${skillId}/companies`
        );

        return response.data;
    } catch (error) {
        console.error("Failed to fetch companies for skill:", error);
        throw error;
    }
}