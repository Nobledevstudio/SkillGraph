export interface CareerCandidate {
    id: string;
    name: string;
    title: string | null;
    experienceLevel: string;
    location: string;
    skills: string[];
}

export interface CareerRecommendation {
    jobId: string;
    job: string;
    company: string | null;
    matchPercentage: number;
    matchedSkills: string[];
    missingSkills: string[];
}

export interface SkillToLearn {
    skillId: string;
    skill: string;
    jobCount: number;
}

export interface CareerPathData {
    candidate: CareerCandidate;
    recommendations: CareerRecommendation[];
    skillsToLearn: SkillToLearn[];
}

export interface CareerPathResponse {
    success: boolean;
    data: CareerPathData;
}