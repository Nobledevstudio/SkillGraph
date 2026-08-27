import { SkillToLearn } from "@/components/career/types/career.types";
import SkillToLearnCard from "./SkillsToLearnCard";

interface SkillsToLearnProps {
    skills: SkillToLearn[];
}

export default function SkillsToLearn({
    skills,
}: SkillsToLearnProps) {
    return (
        <section>
            <h2 className="text-xl font-semibold text-text-primary">
                Skills you could learn next
            </h2>

            <p className="mt-2 text-text-secondary">
                Learning these skills could connect you to additional
                opportunities.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.slice(0, 6).map((skill) => (
                    <SkillToLearnCard
                        key={skill.skillId}
                        skill={skill}
                    />
                ))}
            </div>
        </section>
    );
}