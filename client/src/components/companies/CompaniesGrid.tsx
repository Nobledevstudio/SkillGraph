"use client";

import EmptyState from "../common/EmptyState";
import ErrorState from "../common/ErrorState";
import LoadingState from "../common/LoadingState";
import { useCompanies } from "./hook/useCompanies";
import CompanyCard from "./CompanyCard";

export default function CompaniesGrid() {
    const {
        data,
        isLoading,
        isError,
    } = useCompanies();

    if (isLoading) {
        return <LoadingState message="Loading companies..." />;
    }

    if (isError) {
        return (
            <ErrorState
                title="Unable to load companies"
                message="We couldn't load the companies right now. Please try again."
            />
        );
    }

    const companies = data?.data ?? [];

    if (companies.length === 0) {
        return (
            <EmptyState
                title="No companies found"
                message="There are no companies available right now."
            />
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
                <CompanyCard
                    key={company.id}
                    id={company.id}
                    name={company.name}
                    description={company.description}
                    openJobs={company.openJobs}
                />
            ))}
        </div>
    );
}