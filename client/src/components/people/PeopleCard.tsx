import Link from "next/link";
import { ArrowRight, MapPin, UserRound } from "lucide-react";
import { Person } from "./types/people.types";



interface PeopleGridCardProps {
    person: Person;
}

export default function PeopleGridCard({
    person,
}: PeopleGridCardProps) {
    return (
        <article className="group rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
            <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
                    <UserRound className="h-6 w-6" />
                </div>

                <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
                    {person.experienceLevel}
                </span>
            </div>

            <div className="mt-5">
                <h3 className="text-lg font-semibold text-text-primary">
                    {person.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
                    <MapPin className="h-4 w-4" />
                    <span>{person.location}</span>
                </div>
            </div>

            <Link
                href={`/career/${person.id}`}
                className="mt-6 flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-light"
            >
                <span>Explore Career Path</span>

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </article>
    );
}