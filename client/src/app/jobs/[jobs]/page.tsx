import JobDetails from "./components/JobDetails";

type JobDetailsPageProps = {
    params: Promise<{
        jobs: string;
    }>;
};

export default async function JobDetailsPage({
    params,
}: JobDetailsPageProps) {
    const { jobs } = await params;

    return <JobDetails jobId={jobs} />;
}