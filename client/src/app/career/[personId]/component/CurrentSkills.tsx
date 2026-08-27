interface CurrentSkillsProps {
    skills: string[];
}

export default function CurrentSkills({
    skills,
}: CurrentSkillsProps) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-text-primary">
                Current skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full bg-primary-light px-3 py-1.5 text-sm font-medium text-primary"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}