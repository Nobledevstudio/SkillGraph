import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
//import SkillGraphVisual from "./SkillGraphVisual";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
                {/* Content */}
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                            Powered by CognoDB Graph Engine
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                        Discover where your{" "}
                        <span className="text-primary">skills</span> can take
                        you.
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                        Explore the connections between your skills, related
                        technologies, jobs, companies, and industries.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            size="lg"
                            className="rounded-xl px-6 shadow-sm"
                            render={<Link href="/skills" />}
                        >
                            <Search className="mr-2 h-4 w-4" />
                            Explore Skills
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-xl border-slate-200 px-6"
                            render={<Link href="/jobs" />}
                        >
                            Explore Jobs
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Trust / Graph hint */}
                    <div className="mt-10 flex items-center gap-3 text-xs text-slate-400">
                        <div className="flex -space-x-1">
                            <span className="h-2 w-2 rounded-full border-2 border-white bg-primary" />
                            <span className="h-2 w-2 rounded-full border-2 border-white bg-primary/60" />
                            <span className="h-2 w-2 rounded-full border-2 border-white bg-primary/30" />
                        </div>

                        <span>
                            Skills connected to real career opportunities
                        </span>
                    </div>
                </div>

                {/* Graph */}
                <div className="relative flex min-h-[340px] items-center justify-center lg:min-h-[420px]">

                </div>
            </div>
            *
        </section>
    );
}