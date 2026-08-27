
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Explore your skills",
        description:
            "Tell us what you already know — from frameworks to fundamentals.",
    },
    {
        number: "02",
        title: "Discover connected opportunities",
        description:
            "Follow the graph outward to jobs, companies, and adjacent skills.",
    },
    {
        number: "03",
        title: "Find your next career direction",
        description:
            "See exactly which skill gaps stand between you and the role.",
    },
];

export default function HowSkillGraphWorks() {
    return (
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        The Process
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                        How SkillGraph works
                    </h2>
                </div>

                {/* Steps */}
                <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            {/* Connector */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-48px)] bg-slate-200 md:block" />
                            )}

                            <div className="relative">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-sm font-semibold text-primary">
                                    {step.number}
                                </span>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

