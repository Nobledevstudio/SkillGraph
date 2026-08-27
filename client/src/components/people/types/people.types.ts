export interface Person {
    id: string;
    name: string;
    experienceLevel: string;
    location: string;
}

export interface PeopleResponse {
    success: boolean;
    data: Person[];
}