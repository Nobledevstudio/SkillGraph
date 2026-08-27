import { AlertCircle } from "lucide-react";

type ErrorStateProps = {
    title?: string;
    message?: string;
};

export default function ErrorState({
    title = "Something went wrong",
    message = "We couldn't load this data. Please try again.",
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-500">
                <AlertCircle className="h-5 w-5" />
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