"use client";

import SkillNetworkGraph from "./SkillNetworkGraph";

type RelatedSkill = {
    id: string;
    name: string;
    category: string;
};

type SkillConnectionsProps = {
    skillId: string;
    skillName: string;
    skills: RelatedSkill[];
};

export default function SkillConnections({
    skillId,
    skillName,
    skills,
}: SkillConnectionsProps) {
    return (
        <section className="space-y-5">
            <div>
                <p className="text-sm font-medium text-primary">
                    Skill connections
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                    Related skills
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Explore skills connected to this technology.
                </p>
            </div>

            {skills.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                    <p className="text-sm font-medium text-slate-700">
                        No related skills yet
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Check back later as more skill connections are added.
                    </p>
                </div>
            ) : (
                <SkillNetworkGraph
                    skillId={skillId}
                    skillName={skillName}
                    skills={skills}
                />
            )}
        </section>
    );
}