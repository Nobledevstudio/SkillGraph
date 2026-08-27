"use client";

import { useState } from "react";

import SkillsHeader from "@/components/skills/SkillsHeader";
import SkillsSearch from "@/components/skills/SkillsSearch";
import SkillsFilters from "@/components/skills/SkillsFilters";
import SkillsGrid from "@/components/skills/SkillsGrid";

export default function SkillsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SkillsHeader />

            <div className="mt-8 max-w-2xl">
                <SkillsSearch
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
            </div>

            <div className="mt-5">
                <SkillsFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
            </div>

            <div className="mt-5">
                <SkillsGrid
                    searchTerm={searchTerm}
                    selectedCategory={selectedCategory}
                />
            </div>
        </div>
    );
}