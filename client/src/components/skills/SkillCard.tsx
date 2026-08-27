import Link from "next/link";
import { ArrowUpRight, Network } from "lucide-react";

type SkillCardProps = {
    id: string;
    name: string;
    category: string;
};

export default function SkillCard({
    id,
    name,
    category,
}: SkillCardProps) {
    return (
        <Link
            href={`/skills/${id}`}
            className="group relative flex min-h-47 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8"
        >
            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />

            <div className="relative">
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-white">
                    <Network className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="mt-5">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        {name}
                    </h3>

                    <span className="mt-2 inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                        {category}
                    </span>
                </div>
            </div>

            {/* Footer */}
            <div className="relative mt-6 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 transition-colors group-hover:text-primary">
                    Explore connections
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </Link>
    );
}