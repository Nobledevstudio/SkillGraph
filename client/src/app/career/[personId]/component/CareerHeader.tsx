interface CareerHeaderProps {
    name: string;
    experienceLevel: string;
    location: string;
}

export default function CareerHeader({
    name,
    experienceLevel,
    location,
}: CareerHeaderProps) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">
                Your Career Path
            </h1>

            <p className="mt-2 text-text-secondary">
                See how your current skills connect to potential career
                opportunities.
            </p>

            <div className="mt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                    {name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                </div>

                <h2 className="mt-3 text-xl font-semibold text-text-primary">
                    {name}
                </h2>

                <p className="mt-1 text-sm text-text-secondary">
                    {experienceLevel} Developer · {location}
                </p>
            </div>
        </div>
    );
}