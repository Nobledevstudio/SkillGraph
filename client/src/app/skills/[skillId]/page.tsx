"use client";

import { use } from "react";

import SkillHeader from "./component/SkillHeader";
import SkillStats from "./component/SkillStats";
import SkillConnections from "./component/SkillConnections";
import SkillJobs from "./component/SkillJobs";

import { useGetSkill } from "@/components/skills/hook/useGetSkill";
import { useGetSkillNetwork } from "@/components/skills/hook/useGetNetworkSkill";
import { useGetCompaniesForSkill } from "@/components/skills/hook/useGetCompainesForSkills";

import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

type SkillDetailsPageProps = {
    params: Promise<{
        skillId: string;
    }>;
};

export default function SkillDetailsPage({
    params,
}: SkillDetailsPageProps) {
    const { skillId } = use(params);

    const {
        data: skillData,
        isLoading: skillLoading,
        isError: skillError,
    } = useGetSkill(skillId);

    const {
        data: networkData,
        isLoading: networkLoading,
        isError: networkError,
    } = useGetSkillNetwork(skillId);

    const {
        data: companiesData,
        isLoading: companiesLoading,
        isError: companiesError,
    } = useGetCompaniesForSkill(skillId);

    if (skillLoading || networkLoading || companiesLoading) {
        return <LoadingState />;
    }

    if (skillError) {
        return (
            <ErrorState
                message="We couldn't load this skill."
            />
        );
    }

    if (!skillData?.data) {
        return (
            <EmptyState
                title="Skill not found"
                message="We couldn't find the skill you're looking for."
            />
        );
    }

    if (networkError || companiesError) {
        return (
            <ErrorState
                message="We couldn't load this skill's connections."
            />
        );
    }

    const skill = skillData.data;

    const relatedSkills = networkData?.data ?? [];

    const companies = companiesData?.data ?? [];

    const jobs = companies.reduce(
        (total, company) => total + company.jobs.length,
        0
    );

    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="space-y-12">
                <SkillHeader
                    name={skill.name}
                    category={skill.category}
                />

                <SkillStats
                    relatedSkills={relatedSkills.length}
                    jobs={jobs}
                />

                <SkillConnections
                    skillId={skill.id}
                    skillName={skill.name}
                    skills={networkData?.data ?? []}
                />

                <SkillJobs
                    companies={companies}
                />
            </div>
        </main>
    );
}