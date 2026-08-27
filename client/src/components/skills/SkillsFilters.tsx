"use client";

type SkillsFiltersProps = {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
};

const filters = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "General",
];

export default function SkillsFilters({
    selectedCategory,
    onCategoryChange,
}: SkillsFiltersProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
                const isActive = selectedCategory === filter;

                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => onCategoryChange(filter)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            isActive
                                ? "bg-primary text-white shadow-sm"
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