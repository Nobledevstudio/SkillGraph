export type JobSkill = {
    id: string;
    name: string;
    category: string;
};

export type Job = {
    id: string;
    title: string;
    location: string;
    employmentType: string;
    salaryRange: string;
    skills: JobSkill[];
};

export type JobsResponse = {
    success: boolean;
    data: Job[];
};

export type JobResponse = {
    success: boolean;
    data: Job;
};