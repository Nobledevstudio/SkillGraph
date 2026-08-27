"use client";

import JobsFilters from "@/components/jobs/JobsFilters";
import JobsGrid from "@/components/jobs/JobsGrid";
import JobsHeader from "@/components/jobs/JobsHeader";
import JobsSearch from "@/components/jobs/JobsSearch";
import { useState } from "react";

export default function JobsPage() {

           const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <JobsHeader />
            <div className="mt-8 max-w-2xl">
                <JobsSearch />
            </div>
            <div className="mt-5">
                <JobsFilters selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            </div>
            <div className="mt-5">
                <JobsGrid selectedFilter={selectedCategory} />
            </div>

        </main>
    );
}