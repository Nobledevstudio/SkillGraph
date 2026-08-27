"use client";

import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";
import LoadingState from "../common/LoadingState";
import { useJobs } from "./hook/useJobs";
import JobCard from "./JobCard";

type JobsGridProps = {
    selectedFilter: string;
};

export default function JobsGrid({
    selectedFilter,
}: JobsGridProps) {
    const {
        data,
        isLoading,
        isError,
    } = useJobs();

    if (isLoading) {
        return <LoadingState message="Loading jobs..." />;
    }

    if (isError) {
        return (
            <ErrorState
                title="Unable to load jobs"
                message="We couldn't load the jobs right now. Please try again."
            />
        );
    }

    const jobs = data?.data ?? [];

    const filteredJobs =
        selectedFilter === "All"
            ? jobs
            : jobs.filter(
                  (job) =>
                      job.employmentType === selectedFilter ||
                      job.location === selectedFilter
              );

    if (filteredJobs.length === 0) {
        return (
            <EmptyState
                title="No jobs found"
                message={`There are no ${selectedFilter.toLowerCase()} jobs available right now.`}
            />
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    location={job.location}
                    employmentType={job.employmentType}
                    salaryRange={job.salaryRange}
                    skills={job.skills}
                />
            ))}
        </div>
    );
}