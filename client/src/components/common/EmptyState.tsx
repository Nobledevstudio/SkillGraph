import { SearchX } from "lucide-react";

type EmptyStateProps = {
    title?: string;
    message?: string;
};

export default function EmptyState({
    title = "Nothing found",
    message = "There is nothing to display here yet.",
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-12 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <SearchX className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-2 max-w-md text-sm text-slate-500">
                {message}
            </p>
        </div>
    );
}