"use client";


import { useCompanyJobs } from "@/components/companies/hook/useCompanyJob";
import CompanyJobCard from "./CompanyJobCard";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

type CompanyJobsGridProps = {
     companies: string;
};

export default function CompanyJobsGrid({
    companies,
}: CompanyJobsGridProps) {
    const {
        data,
        isLoading,
        isError,
    } = useCompanyJobs(companies);


    console.log("COMPANY ID:", companies);
    console.log("COMPANY JOB RESPONSE:", data);
  

    if (isLoading) {
        return <LoadingState message="Loading company jobs..." />;
    }

    if (isError) {
        return (
            <ErrorState
                title="Unable to load company jobs"
                message="We couldn't load this company's jobs right now. Please try again."
            />
        );
    }

    const jobs = data?.data ?? [];


    console.log(jobs)

    if (jobs.length === 0) {
        return (
            <EmptyState
                title="No jobs found"
                message="This company currently has no available jobs."
            />
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((item) => (
                <CompanyJobCard
                    key={item.job.id}
                    item={item}
                />
            ))}
        </div>
    );
}