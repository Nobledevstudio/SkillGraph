import PeopleGridCard from "./PeopleCard";
import { Person } from "./types/people.types";


interface PeopleGridProps {
    people: Person[];
}

export default function PeopleGrid({ people }: PeopleGridProps) {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
                <PeopleGridCard
                    key={person.id}
                    person={person}
                />
            ))}
        </div>
    );
}