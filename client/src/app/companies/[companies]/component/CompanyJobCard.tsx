import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CompanyJobWithSkills } from "@/components/companies/types/companies.types";


type CompanyJobCardProps = {
    item: CompanyJobWithSkills;
};

export default function CompanyJobCard({
    item,
}: CompanyJobCardProps) {
    const { job, skills } = item;

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        {job.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                    </div>
                </div>

                <Link
                    href={`/jobs/${job.id}`}
                    className="text-primary"
                >
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.id}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-slate-500">
                    {job.employmentType}
                </span>

                <span className="font-semibold text-slate-900">
                    {job.salaryRange}
                </span>
            </div>

            <Link
                href={`/jobs/${job.id}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
                View job
                <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    );
}