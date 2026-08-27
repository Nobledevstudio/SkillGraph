import { api } from "@/lib/axios";

export const getCareerPath = async (personId: string) => {
    const response = await api.get(
        `/career/${personId}/paths`
    );

    return response.data;
};