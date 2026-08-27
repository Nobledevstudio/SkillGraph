export type Skill = {
    id: string;
    name: string;
    category: string;
};

export type SkillsResponse = {
    success: boolean;
    data: Skill[];
};

export type SkillResponse = {
    success: boolean;
    data: Skill;
};

export type SkillNetworkResponse = {
    success: boolean;
    data: Skill[];
};

export type SkillCompany = {
    company: {
        id: string;
        name: string;
    };
    jobs: {
        id: string;
        title: string;
    }[];
};

export type SkillCompaniesResponse = {
    success: boolean;
    data: SkillCompany[];
};