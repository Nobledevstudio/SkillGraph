import { SkillToLearn } from "@/components/career/types/career.types";
import { Plus } from "lucide-react";



interface SkillToLearnCardProps {
    skill: SkillToLearn;
}

export default function SkillToLearnCard({
    skill,
}: SkillToLearnCardProps) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-border bg-white p-4">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Plus className="h-5 w-5" />
                </div>

                <div>
                    <p className="font-semibold text-text-primary">
                        {skill.skill}
                    </p>

                    <p className="text-sm text-text-secondary">
                        +{skill.jobCount}{" "}
                        {skill.jobCount === 1 ? "job" : "jobs"}
                    </p>
                </div>
            </div>
        </div>
    );
}