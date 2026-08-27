"use client";

import { useGetCareerPath } from "@/components/career/hook/useGetCareerPath";
import EmptyState from "@/components/common/EmptyState";
import ErrorState from "@/components/common/ErrorState";
import LoadingState from "@/components/common/LoadingState";
import { useParams } from "next/navigation";

import CareerHeader from "./component/CareerHeader";
import CurrentSkills from "./component/CurrentSkills";
import CareerRecommendations from "./component/CareerRecommendations";
import SkillsToLearn from "./component/SkillsToLearn";

export default function CareerPage() {
    const params = useParams();

    const personId = params.personId as string;

    const { data, isLoading, isError } =
        useGetCareerPath(personId);
    if (isLoading) {
        return <LoadingState message="Loading career path..." />;
    }

    if (isError) {
        return (
            <ErrorState message="Unable to load this career path. Please try again." />
        );
    }

    if (!data?.data?.candidate) {
        return (
            <EmptyState message="No career profile was found for this person." />
        );
    }
    const {
        candidate,
        recommendations,
        skillsToLearn,
    } = data.data;

    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <CareerHeader
                name={candidate.name}
                experienceLevel={candidate.experienceLevel}
                location={candidate.location}
            />

            <CurrentSkills
                skills={candidate.skills}
            />

            <CareerRecommendations
                recommendations={recommendations}
            />

            <SkillsToLearn
                skills={skillsToLearn}
            />
        </main>
    );
}