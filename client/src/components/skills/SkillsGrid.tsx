"use client";

import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";
import LoadingState from "../common/LoadingState";
import SkillCard from "./SkillCard";
import { useSkills } from "./hook/useSkills";
import { useGlobalSearch } from "../search/hook/useGlobalSearch";

type SkillsGridProps = {
    selectedCategory: string;
    searchTerm: string;
};

export default function SkillsGrid({
    selectedCategory,
    searchTerm,
}: SkillsGridProps) {
    const skillsQuery = useSkills();
    const searchQuery = useGlobalSearch(searchTerm);

    if (skillsQuery.isLoading || searchQuery.isLoading) {
        return <LoadingState message="Loading skills..." />;
    }

    if (skillsQuery.isError || searchQuery.isError) {
        return (
            <ErrorState
                title="Unable to load skills"
                message="We couldn't load the skills right now. Please try again."
            />
        );
    }

    const skills = searchTerm.trim()
        ? (searchQuery.data?.data ?? [])
            .filter((result) => result.types?.includes("Skill"))
        : (skillsQuery.data?.data ?? []);

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter(
                (skill) => skill.category === selectedCategory
            );


    console.log(
        "SEARCH RESULTS:",
        JSON.stringify(searchQuery.data?.data, null, 2)
    );

    if (filteredSkills.length === 0) {
        return (
            <EmptyState
                title="No skills found"
                message="No skills matched your search."
            />
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => (
                <SkillCard
                    key={skill.id}
                    id={skill.id}
                    name={skill.name ?? ""}
                    category={skill.category ?? ""}
                />
            ))}
        </div>
    );
}