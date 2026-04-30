import type { ActiveType, ActiveYear } from "../types/filters";
import TOPICS, { type TopicId } from "../data/topics";

interface HeaderProps {
  search: string;
  onSearchChange: (search: string) => void;
  activeTopic: TopicId | 0;
  activeType: ActiveType;
  activeYear: ActiveYear;
  onTopicChange: (topic: TopicId | 0) => void;
  onTypeChange: (type: ActiveType) => void;
  onYearChange: (year: ActiveYear) => void;

  years: string[];
  onResetFilters?: () => void;
}

export function Header({
  search,
  onSearchChange,
  activeTopic,
  activeType,
  activeYear,
  onTopicChange,
  onTypeChange,
  onYearChange,

  years,
  onResetFilters,
}: HeaderProps) {
  const hasActiveFilters =
    activeTopic !== 0 || activeYear !== "all" || activeType !== "all" || search !== "";

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 pt-4 pb-3 min-[901px]:px-8">
        {/* Top Row: Title & Search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="font-[family:var(--serif)] text-xl font-bold text-[var(--text)] whitespace-nowrap">
            Electromagnetics <span className="text-[var(--text3)] font-normal">EX 503</span>
          </h1>

          <div className="relative w-full md:w-64">
            <svg
              aria-hidden="true"
              className="absolute top-1/2 left-2.5 -translate-y-1/2 text-[var(--text3)]"
              fill="none"
              height="14"
              viewBox="0 0 24 24"
              width="14"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] py-1.5 pr-2.5 pl-8 font-[family:var(--sans)] text-[13.5px] text-[var(--text)] outline-none transition-colors focus:border-[var(--text3)]"
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col gap-3 mt-1">
          {/* Topics */}
          <div className="flex items-center">
            <div className="flex overflow-x-auto hide-scrollbar items-center gap-2 pb-1 -mb-1 w-full">
              <button
                onClick={() => onTopicChange(0)}
                className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                  activeTopic === 0
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                    : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                }`}
              >
                All Topics
              </button>
              {TOPICS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => onTopicChange(t.id)}
                  className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                    activeTopic === t.id
                      ? "border-transparent"
                      : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--text3)]"
                  }`}
                  style={
                    activeTopic === t.id
                      ? { backgroundColor: t.bg, color: t.color, borderColor: t.color }
                      : { color: "var(--text2)" }
                  }
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Years & Types */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex overflow-x-auto hide-scrollbar items-center gap-2 pb-1 -mb-1 flex-1">
              <button
                onClick={() => onYearChange("all")}
                className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                  activeYear === "all"
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                    : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                }`}
              >
                All Years
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => onYearChange(y as ActiveYear)}
                  className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                    activeYear === y
                      ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                      : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
              <div className="flex items-center bg-[var(--bg)] rounded-full p-0.5 border border-[var(--border)]">
                {(["all", "Regular", "Back"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => onTypeChange(type)}
                    className={`rounded-full px-4 py-1 text-[12px] font-medium transition-all ${
                      activeType === type
                        ? "bg-[var(--bg2)] text-[var(--text)] shadow-sm border border-[var(--border2)]"
                        : "text-[var(--text3)] hover:text-[var(--text2)] border border-transparent"
                    }`}
                  >
                    {type === "all" ? "All Types" : type}
                  </button>
                ))}
              </div>

              {hasActiveFilters && onResetFilters && (
                <button
                  onClick={onResetFilters}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium text-[var(--text3)] hover:text-[var(--text)] hover:bg-[var(--bg3)] transition-colors"
                  title="Reset all filters"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
