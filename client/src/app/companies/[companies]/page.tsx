import CompanyJobsGrid from "./component/CompanyJobsGrid";


type CompanyPageProps = {
    params: Promise<{
        companies: string;
    }>;
};

export default async function CompanyPage({
    params,
}: CompanyPageProps) {
    const { companies } = await params;

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Company
                </p>

                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Company Jobs
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                    Explore the jobs and skills this company is hiring for.
                </p>
            </div>

            <div className="mt-8">
                <CompanyJobsGrid companies={companies} />
            </div>
        </div>
    );
}