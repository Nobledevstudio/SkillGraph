
import CompaniesGrid from "@/components/companies/CompaniesGrid";
import CompaniesHeader from "@/components/companies/CompanyHeader";

export default function CompaniesPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <CompaniesHeader />

            <div className="mt-8">
                <CompaniesGrid />
            </div>
        </div>
    );
}