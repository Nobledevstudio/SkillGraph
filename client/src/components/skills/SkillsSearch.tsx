import { Search } from "lucide-react";

type SkillsSearchProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
};

export default function SkillsSearch({
    searchTerm,
    onSearchChange,
}: SkillsSearchProps) {
    return (
        <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
                type="search"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search skills..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
        </div>
    );
}