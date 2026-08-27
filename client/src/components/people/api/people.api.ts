
import { api } from "@/lib/axios";
import type { PeopleResponse } from "../types/people.types";

export const getPeople = async (): Promise<PeopleResponse> => {
    const response = await api.get<PeopleResponse>("/people");

    return response.data;
};