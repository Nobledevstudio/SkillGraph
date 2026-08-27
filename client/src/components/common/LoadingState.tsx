import { Loader2 } from "lucide-react";

type LoadingStateProps = {
    message?: string;
};

export default function LoadingState({
    message = "Loading...",
}: LoadingStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />

            <p className="mt-3 text-sm text-slate-500">
                {message}
            </p>
        </div>
    );
}