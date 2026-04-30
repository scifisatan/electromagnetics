import type { ActiveType, ActiveYear } from "../types/filters";
import TOPICS, { type TopicId } from "../data/topics";

interface HeaderProps {
  questionCount: number;
  search: string;
  onSearchChange: (search: string) => void;
  activeTopic: TopicId | 0;
  activeType: ActiveType;
  activeYear: ActiveYear;
  onTopicChange: (topic: TopicId | 0) => void;
  onTypeChange: (type: ActiveType) => void;
  onYearChange: (year: ActiveYear) => void;
  topicCounts: Map<TopicId, number>;
  years: string[];
}

export function Header({
  questionCount,
  search,
  onSearchChange,
  activeTopic,
  activeType,
  activeYear,
  onTopicChange,
  onTypeChange,
  onYearChange,
  topicCounts,
  years,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-3 md:flex-row md:items-center min-[901px]:px-8">
        <div className="flex-1">
          <h1 className="font-[family:var(--serif)] text-xl font-bold text-[var(--text)] whitespace-nowrap">
            Electromagnetics <span className="text-[var(--text3)] font-normal">EX 503</span>
          </h1>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative w-full md:w-48 lg:w-64">
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
          <div className="flex flex-wrap items-center gap-2">
            <select
              className="cursor-pointer rounded-md border border-[var(--border)] bg-[var(--bg)] py-1.5 pl-2 pr-6 text-[13.5px] font-medium text-[var(--text2)] outline-none focus:border-[var(--text3)] font-[family:var(--sans)]"
              value={activeTopic}
              onChange={(e) => onTopicChange(Number(e.target.value) as TopicId | 0)}
            >
              <option value={0}>All Topics</option>
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>

            <select
              className="cursor-pointer rounded-md border border-[var(--border)] bg-[var(--bg)] py-1.5 pl-2 pr-6 text-[13.5px] font-medium text-[var(--text2)] outline-none focus:border-[var(--text3)] font-[family:var(--sans)]"
              value={activeYear}
              onChange={(e) => onYearChange(e.target.value as ActiveYear)}
            >
              <option value="all">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <select
              className="cursor-pointer rounded-md border border-[var(--border)] bg-[var(--bg)] py-1.5 pl-2 pr-6 text-[13.5px] font-medium text-[var(--text2)] outline-none focus:border-[var(--text3)] font-[family:var(--sans)]"
              value={activeType}
              onChange={(e) => onTypeChange(e.target.value as ActiveType)}
            >
              <option value="all">All Types</option>
              <option value="Regular">Regular</option>
              <option value="Back">Back</option>
            </select>
          </div>
      </div>
    </header>
  );
}
