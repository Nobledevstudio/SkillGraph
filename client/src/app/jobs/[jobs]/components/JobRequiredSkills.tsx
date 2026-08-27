type JobSkill = {
    id: string;
    name: string;
    category: string;
};

type JobRequiredSkillsProps = {
    skills: JobSkill[];
};

export default function JobRequiredSkills({
    skills,
}: JobRequiredSkillsProps) {
    return (
        <section className="space-y-4">
            <div>
                <p className="text-sm font-medium text-primary">
                    Skills
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    Required skills
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Skills required for this job.
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                    >
                        <p className="text-sm font-semibold text-slate-900">
                            {skill.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            {skill.category}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}