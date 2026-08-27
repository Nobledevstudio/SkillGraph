import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CareerRecommendation } from "@/components/career/types/career.types";



interface CareerRecommendationCardProps {
    recommendation: CareerRecommendation;
}

export default function CareerRecommendationCard({
    recommendation,
}: CareerRecommendationCardProps) {
    return (
        <article className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                        {recommendation.job}
                    </h3>

                    <p className="mt-1 text-sm text-text-secondary">
                        {recommendation.company}
                    </p>
                </div>

                <span className="rounded-full bg-primary-light px-3 py-1 text-sm font-semibold text-primary">
                    {recommendation.matchPercentage}% MATCH
                </span>
            </div>

            {recommendation.matchedSkills.length > 0 && (
                <div className="mt-6">
                    <p className="text-sm font-semibold text-text-primary">
                        Why this matches
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {recommendation.matchedSkills.map((skill) => (
                            <span
                                key={skill}
                                className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-sm text-green-700"
                            >
                                <Check className="h-3.5 w-3.5" />
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {recommendation.missingSkills.length > 0 && (
                <div className="mt-5">
                    <p className="text-sm font-semibold text-text-primary">
                        Missing{" "}
                        {recommendation.missingSkills.length === 1
                            ? "skill"
                            : "skills"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {recommendation.missingSkills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full bg-surface-muted px-3 py-1.5 text-sm text-text-secondary"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

           
        </article>
    );
}