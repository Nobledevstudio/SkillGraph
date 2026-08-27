export type Company = {
    id: string;
    name: string;
    description: string;
    openJobs: number;
};

export type CompaniesResponse = {
    success: boolean;
    data: Company[];
};

export type CompanyJobSkill = {
    id: string;
    name: string;
    category: string;
};

export type CompanyJob = {
    id: string;
    title: string;
    location: string;
    employmentType: string;
    salaryRange: string;
};

export type CompanyJobWithSkills = {
    job: CompanyJob;
    skills: CompanyJobSkill[];
};

export type CompanyJobsResponse = {
    success: boolean;
    data: CompanyJobWithSkills[];
};