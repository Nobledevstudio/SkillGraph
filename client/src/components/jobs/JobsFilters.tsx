"use client";


type JobFiltersProps = {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
};


const filters = [
    "All",
    "Full-time",
    "Part-time",
    "Contract",
    "Remote",
    "Lagos",
];

export default function JobsFilters({
    selectedCategory,
    onCategoryChange,
}: JobFiltersProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
                const isActive = selectedCategory === filter;
                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => onCategoryChange(filter)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${isActive
                                ? "bg-primary text-white"
                                : "border border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary"
                            }`}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}