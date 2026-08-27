"use client";

import JobHeader from "./JobHeader";
import JobRequiredSkills from "./JobRequiredSkills";

import { useGetJob } from "@/components/jobs/hook/useGeJobs";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

type JobDetailsProps = {
    jobId: string;
};

export default function JobDetails({
    jobId,
}: JobDetailsProps) {
    const {
        data,
        isLoading,
        isError,
    } = useGetJob(jobId);

    if (isLoading) {
        return <LoadingState message="Loading job..." />;
    }

    if (isError) {
        return (
            <ErrorState
                title="Unable to load job"
                message="We couldn't load this job right now. Please try again."
            />
        );
    }

    if (!data?.data) {
        return (
            <EmptyState
                title="Job not found"
                message="We couldn't find the job you're looking for."
            />
        );
    }

    const job = data.data;

    return (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-10">
                <JobHeader
                    title={job.title}
                    location={job.location}
                    employmentType={job.employmentType}
                    salaryRange={job.salaryRange}
                />

                <JobRequiredSkills
                    skills={job.skills}
                />
            </div>
        </main>
    );
}