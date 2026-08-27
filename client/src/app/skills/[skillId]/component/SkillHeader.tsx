import Link from "next/link";
import { ArrowLeft, Network } from "lucide-react";

type SkillHeaderProps = {
    name: string;
    category: string;
};

export default function SkillHeader({
    name,
    category,
}: SkillHeaderProps) {
    return (
        <div className="space-y-6">
            <Link
                href="/skills"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to skills
            </Link>

            <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Network className="h-6 w-6" />
                </div>

                <p className="text-sm font-semibold text-primary">
                    {category} Development
                </p>

                <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    {name}
                </h1>
            </div>
        </div>
    );
}