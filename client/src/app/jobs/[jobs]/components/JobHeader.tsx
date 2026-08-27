import { BriefcaseBusiness, MapPin, Banknote } from "lucide-react";

type JobHeaderProps = {
    title: string;
    location: string;
    employmentType: string;
    salaryRange: string;
};

export default function JobHeader({
    title,
    location,
    employmentType,
    salaryRange,
}: JobHeaderProps) {
    return (
        <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Job opportunity
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{location}</span>
                </div>

                <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-slate-400" />
                    <span>{employmentType}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Banknote className="h-4 w-4 text-slate-400" />
                    <span>{salaryRange}</span>
                </div>
            </div>
        </div>
    );
}