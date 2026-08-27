import Link from "next/link";
import { Network } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <Link
                    href="/"
                    className="flex w-fit items-center gap-2 text-base font-semibold text-slate-900 transition-colors hover:text-primary"
                >
                    <Network className="h-5 w-5 text-primary" />
                    SkillGraph
                </Link>

                <p className="w-full text-sm leading-6 text-slate-500 md:text-right">
                    Explore careers through the connections between skills,
                    jobs, companies, and industries.
                </p>
            </div>
        </footer>
    );
}
