import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Clock3, MapPin } from "lucide-react";

type Job = {
    id: string;
    title: string;
    location?: string;
    employmentType?: string;
    salary?: string;
    skills?: string[];
};

type CompanyJobs = {
    company: {
        id: string;
        name: string;
    };
    jobs: Job[];
};

type SkillJobsProps = {
    companies: CompanyJobs[];
};

export default function SkillJobs({
    companies,
}: SkillJobsProps) {
    const jobs = companies.flatMap((item) =>
        item.jobs.map((job) => ({
            ...job,
            companyName: item.company.name,
        }))
    );

    return (
        <section className="space-y-5">
            <div>
                <p className="text-sm font-medium text-primary">
                    Opportunities
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    Jobs requiring this skill
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Explore roles where this skill is currently in demand.
                </p>
            </div>

            {jobs.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                    <BriefcaseBusiness className="mx-auto h-8 w-8 text-slate-400" />

                    <p className="mt-3 text-sm font-medium text-slate-700">
                        No jobs found
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        There are no jobs connected to this skill yet.
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 lg:grid-cols-2">
                    {jobs.map((job) => (
                        <article
                            key={job.id}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {job.title}
                                    </h3>

                                    <p className="mt-1 text-sm font-medium text-primary">
                                        {job.companyName}
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                                    <BriefcaseBusiness className="h-5 w-5" />
                                </div>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
                                {job.location && (
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                    </span>
                                )}

                                {job.employmentType && (
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        {job.employmentType}
                                    </span>
                                )}
                            </div>

                            {job.salary && (
                                <p className="mt-4 text-sm font-semibold text-slate-900">
                                    {job.salary}
                                </p>
                            )}

                            {job.skills && job.skills.length > 0 && (
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {job.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <Link
                                href={`/jobs/${job.id}`}
                                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                            >
                                View job
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}