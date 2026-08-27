import Link from "next/link";
import {
    ArrowRight,
    BriefcaseBusiness,
    MapPin,
    Banknote,
} from "lucide-react";

type JobSkill = {
    id: string;
    name: string;
    category: string;
};

type JobCardProps = {
    id: string;
    title: string;
    location: string;
    employmentType: string;
    salaryRange: string;
    skills: JobSkill[];
};

export default function JobCard({
    id,
    title,
    location,
    employmentType,
    salaryRange,
    skills,
}: JobCardProps) {
    return (
        <Link
            href={`/jobs/${id}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                </div>

                <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {title}
            </h3>

            <div className="mt-3 space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{location}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Banknote className="h-4 w-4 text-slate-400" />
                    <span>{salaryRange}</span>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.id}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                    {employmentType}
                </span>

                <span className="text-sm font-medium text-primary">
                    View job
                </span>
            </div>
        </Link>
    );
}