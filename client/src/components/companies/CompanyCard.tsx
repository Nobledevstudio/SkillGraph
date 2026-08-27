import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Company } from "./types/companies.types";



type CompanyCardProps = {
    company: Company;
};

export default function CompanyCard({
    company,
}: CompanyCardProps) {
    return (
        <Link
            href={`/companies/${company.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                </div>

                <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-slate-900">
                {company.name}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                {company.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <span className="font-medium">Open jobs:</span>

                <span className="font-semibold text-slate-900">
                    {company.openJobs}
                </span>
            </div>

            <div className="mt-5 text-sm font-medium text-primary">
                View jobs →
            </div>
        </Link>
    );
}