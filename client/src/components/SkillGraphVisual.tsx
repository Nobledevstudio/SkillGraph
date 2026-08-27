import { ArrowRight, Code2, Briefcase, Building2 } from "lucide-react";

const graph = [
    ["React", "Next.js", "Frontend Developer", "TechNova"],
    ["Python", "FastAPI", "Backend Developer", "AI Labs"],
    ["Docker", "Kubernetes", "DevOps Engineer", "CloudBase"],
];

export default function SkillGraphVisual() {
    return (
        <div className="w-full min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Skill Network
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    Discover connections between your skills and careers.
                </p>
            </div>

            <div className="space-y-3">
                {graph.map(([skill, tech, job, company]) => (
                    <div
                        key={skill}
                        className="flex min-w-0 flex-wrap items-center gap-1.5 rounded-xl bg-slate-50 p-3"
                    >
                        <Node
                            icon={<Code2 />}
                            text={skill}
                            className="border-primary/20 bg-primary/5 text-primary"
                        />

                        <ArrowRight />

                        <Node
                            text={tech}
                            className="border-blue-200 bg-blue-50 text-blue-600"
                        />

                        <ArrowRight />

                        <Node
                            icon={<Briefcase />}
                            text={job}
                            className="border-slate-200 bg-white text-slate-700"
                        />

                        <ArrowRight />

                        <Node
                            icon={<Building2 />}
                            text={company}
                            className="border-emerald-200 bg-emerald-50 text-emerald-600"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Node({text,icon,className = ""}: {
    text: string;
    icon?: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`flex max-w-full shrink-0 items-center gap-1.5 rounded-lg border px-2 py-1.5 text-[10px] font-medium sm:px-2.5 sm:py-2 sm:text-xs ${className}`}
        >
            {icon && (
                <span className="[&>svg]:h-3 [&>svg]:w-3">
                    {icon}
                </span>
            )}

            <span className="max-w-30 truncate sm:max-w-none">
                {text}
            </span>
        </div>
    );
}