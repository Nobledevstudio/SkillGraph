import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SkillGraphVisual from "./SkillGraphVisual";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">

                {/* Left */}
                <div className="w-full min-w-0">
                    <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:text-[11px]">
                            Powered by CognoDB Graph Engine
                        </span>
                    </div>

                    <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Discover where your{" "}
                        <span className="text-primary">skills</span> can take
                        you.
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 lg:text-lg">
                        Explore the connections between your skills, related
                        technologies, jobs, companies, and industries.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <Link
                            href="/skills"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "w-full rounded-xl px-5 sm:w-auto"
                            )}
                        >
                            <Search className="mr-2 h-4 w-4" />
                            Explore Skills
                        </Link>

                        <Link
                            href="/jobs"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "w-full rounded-xl border-slate-200 px-5 sm:w-auto"
                            )}
                        >
                            Explore Jobs
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-xs text-slate-400 sm:mt-10">
                        <div className="flex shrink-0 -space-x-1">
                            <span className="h-2 w-2 rounded-full border-2 border-white bg-primary" />
                            <span className="h-2 w-2 rounded-full border-2 border-white bg-primary/60" />
                            <span className="h-2 w-2 rounded-full border-2 border-white bg-primary/30" />
                        </div>

                        <span>
                            Skills connected to real career opportunities
                        </span>
                    </div>
                </div>

                {/* Right */}
                <div className="w-full min-w-0">
                    <SkillGraphVisual />
                </div>
            </div>
        </section>
    );
}
