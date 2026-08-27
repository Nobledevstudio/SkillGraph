type SkillStatsProps = {
    relatedSkills: number;
    jobs: number;
};

export default function SkillStats({
    relatedSkills,
    jobs,
  
}: SkillStatsProps) {
    const stats = [
        {
            value: relatedSkills,
            label: "Related skills",
        },
        {
            value: jobs,
            label: "Jobs",
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                    <p className="text-3xl font-bold tracking-tight text-slate-950">
                        {String(stat.value).padStart(2, "0")}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    );
}