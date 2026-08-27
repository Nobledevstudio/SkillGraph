
import { CareerRecommendation } from "@/components/career/types/career.types";
import CareerRecommendationCard from "./CareerRecommendationCard";

interface CareerRecommendationsProps {
    recommendations: CareerRecommendation[];
}

export default function CareerRecommendations({
    recommendations,
}: CareerRecommendationsProps) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-text-primary">
                Recommended opportunities
            </h2>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {recommendations.map((recommendation) => (
                    <CareerRecommendationCard
                        key={recommendation.jobId}
                        recommendation={recommendation}
                    />
                ))}
            </div>
        </section>
    );
}