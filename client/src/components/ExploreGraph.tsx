import Link from "next/link";
import {
    ArrowRight,
    BriefcaseBusiness,
    Building2,
    Network,
    Sparkles,
} from "lucide-react";

const cards = [
    {
        title: "Skills",
        description:
            "Discover technologies and skills connected to your career.",
        href: "/skills",
        link: "Browse skills",
        icon: Sparkles,
    },
    {
        title: "Jobs",
        description:
            "Find opportunities based on the skills employers require.",
        href: "/jobs",
        link: "Browse jobs",
        icon: BriefcaseBusiness,
    },
    {
        title: "Companies",
        description:
            "Explore companies and the jobs they offer.",
        href: "/companies",
        link: "Browse companies",
        icon: Building2,
    },
    {
        title: "Career Paths",
        description:
            "See how your current skills connect to possible career directions.",
        href: "/career",
        link: "See my path",
        icon: Network,
    },
];

export default function ExploreGraph() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        The Graph
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                        Explore the graph
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                        Four ways into the same connected map of careers.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 text-base font-semibold text-slate-900">
                                    {card.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {card.description}
                                </p>

                                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary">
                                    {card.link}

                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

