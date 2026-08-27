"use client";

import ErrorState from "@/components/common/ErrorState";
import LoadingState from "@/components/common/LoadingState";
import { useGetPeople } from "@/components/people/hook/useGetPeople";
import PeopleGridCard from "@/components/people/PeopleGrid";
import PeopleHeader from "@/components/people/PeopleHeader";


export default function CareerPage() {
    const { data, isLoading, isError } = useGetPeople();

    if (isLoading) {
        return <LoadingState />;
    }

    if (isError) {
        return <ErrorState />;
    }

    return (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <PeopleHeader />

            <PeopleGridCard people={data?.data ?? []} />
        </main>
    );
}