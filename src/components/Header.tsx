import type { ActiveType, ActiveYear } from "../types/filters";
import TOPICS, { type TopicId } from "../data/topics";
import { useStudyProgress } from "../hooks/useStudyProgress";

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
  compact?: boolean;
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
  compact,
}: HeaderProps) {
  const progress = useStudyProgress();
  const hasActiveFilters =
    activeTopic !== 0 || activeYear !== "all" || activeType !== "all" || search !== "";

  return (
    <header
      className={`relative ${compact ? "" : "sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md"}`}
    >
      <div
        className={`mx-auto flex flex-col gap-4 ${compact ? "px-0 pt-3 pb-4" : "max-w-4xl px-4 pt-4 pb-3 min-[901px]:px-8"}`}
      >
        {/* Top Row: Title & Search */}
        {!compact && (
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
        )}

        {/* Global Progress Bar */}
        {!compact && (
          <div className="flex flex-col gap-2 px-1 mb-2">
            <div className="flex justify-between items-center text-[13px] font-bold tracking-tight text-[var(--text2)] uppercase">
              <span>
                {activeTopic === 0
                  ? "Overall Progress"
                  : TOPICS.find((t) => t.id === activeTopic)?.name}
              </span>
              <span className="font-mono">
                {activeTopic === 0 ? (
                  <>
                    {Math.round(progress.total.percentage)}% ({progress.total.completed}/
                    {progress.total.total})
                  </>
                ) : (
                  <>
                    {Math.round(
                      progress.topics.find((tp) => tp.topicId === activeTopic)?.percentage || 0,
                    )}
                    % ({progress.topics.find((tp) => tp.topicId === activeTopic)?.completed}/
                    {progress.topics.find((tp) => tp.topicId === activeTopic)?.total})
                  </>
                )}
              </span>
            </div>
            <div className="h-2 w-full bg-[var(--bg3)] rounded-full overflow-hidden border border-[var(--border)] shadow-inner">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-700 ease-in-out shadow-[0_0_8px_rgba(27,54,93,0.3)]"
                style={{
                  width: `${
                    activeTopic === 0
                      ? progress.total.percentage
                      : progress.topics.find((tp) => tp.topicId === activeTopic)?.percentage || 0
                  }%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Filters Row */}
        <div className={`flex flex-col gap-3 ${compact ? "mt-0" : "mt-1"}`}>
          {compact && (
            <div className="relative w-full">
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
          )}

          {/* Topics */}
          <div className="flex items-center">
            <div className="flex overflow-x-auto hide-scrollbar items-center gap-2 pb-1 -mb-1 w-full">
              <button
                onClick={() => onTopicChange(0)}
                className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors flex items-center gap-2 ${
                  activeTopic === 0
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                    : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                }`}
              >
                <span>All Topics</span>
              </button>
              {TOPICS.map((t) => {
                const topicProgress = progress.topics.find((tp) => tp.topicId === t.id);
                const isComplete = topicProgress && topicProgress.completed === topicProgress.total;
                const percentage = topicProgress?.percentage || 0;
                const isActive = activeTopic === t.id;

                return (
                  <button
                    key={t.id}
                    onClick={() => onTopicChange(t.id)}
                    className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-all flex items-center justify-center gap-2 relative overflow-hidden h-[34px] ${
                      isActive
                        ? "shadow-sm"
                        : isComplete
                          ? "border-green-500 bg-green-50 text-green-700 hover:bg-green-100/80"
                          : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                    }`}
                    style={
                      isActive
                        ? { borderColor: t.color, color: t.color, backgroundColor: "var(--bg)" }
                        : {}
                    }
                  >
                    {/* Progress Background - Always visible */}
                    {percentage > 0 && (
                      <div
                        className="absolute left-0 top-0 bottom-0 pointer-events-none transition-all duration-700 ease-out z-0"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: isActive
                            ? t.bg
                            : isComplete
                              ? "rgb(34 197 94 / 0.2)"
                              : "rgb(79 124 255 / 0.1)",
                        }}
                      />
                    )}

                    {/* Progress Edge - Moving indicator line */}
                    {percentage > 0 && percentage < 100 && (
                      <div
                        className="absolute top-0 bottom-0 w-[2px] pointer-events-none transition-all duration-700 ease-out z-10"
                        style={{
                          left: `${percentage}%`,
                          backgroundColor: isActive ? t.color : "var(--accent)",
                          boxShadow: isActive ? `0 0 4px ${t.color}` : "none",
                        }}
                      />
                    )}

                    <div className="flex items-center gap-1.5 relative z-20">
                      {isComplete && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={isActive ? "" : "text-green-600"}
                          style={isActive ? { color: t.color } : {}}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      <span>{t.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Years & Types */}
          <div
            className={`flex flex-col ${compact ? "gap-2" : "md:flex-row md:items-center justify-between gap-3"}`}
          >
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

            <div
              className={`flex items-center gap-2 shrink-0 ${compact ? "justify-between" : "self-start md:self-auto"}`}
            >
              <div className="flex items-center bg-[var(--bg)] rounded-full p-0.5 border border-[var(--border)]">
                {(["all", "Regular", "Back"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => onTypeChange(type)}
                    className={`rounded-full px-3 py-1 text-[11px] font-medium transition-all ${
                      activeType === type
                        ? "bg-[var(--bg2)] text-[var(--text)] shadow-sm border border-[var(--border2)]"
                        : "text-[var(--text3)] hover:text-[var(--text2)] border border-transparent"
                    }`}
                  >
                    {type === "all" ? "Types" : type}
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
                  {!compact && "Reset"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Compact Progress Line (Bottom of header) */}
      {compact && (
        <div className="absolute bottom-0 left-0 w-full flex flex-col pointer-events-none">
          <div className="flex justify-end px-3 pb-0.5">
            <span className="text-[10px] font-mono font-bold text-[var(--text2)] bg-[var(--bg)] px-1 rounded-sm shadow-sm border border-[var(--border)]">
              {activeTopic === 0 ? (
                <>
                  {progress.total.completed}/{progress.total.total}
                </>
              ) : (
                <>
                  {progress.topics.find((tp) => tp.topicId === activeTopic)?.completed}/
                  {progress.topics.find((tp) => tp.topicId === activeTopic)?.total}
                </>
              )}
            </span>
          </div>
          <div className="w-full h-[2px] bg-[var(--bg3)] overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all duration-700 ease-in-out"
              style={{
                width: `${
                  activeTopic === 0
                    ? progress.total.percentage
                    : progress.topics.find((tp) => tp.topicId === activeTopic)?.percentage || 0
                }%`,
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
