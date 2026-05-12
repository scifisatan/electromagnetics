import type { Topic } from "../data/topics";

const filterButtonBase =
  "relative mb-0.5 flex w-full cursor-pointer items-center gap-2 rounded-[7px] px-2.5 py-[7px] text-left font-['Outfit',sans-serif] text-[13.5px] transition-all hover:bg-[var(--bg3)] hover:text-[var(--text)]";
const filterButtonState = (active: boolean) =>
  active ? "font-medium text-[var(--text)]" : "text-[var(--text2)]";
const filterDotBase = "h-[9px] w-[9px] shrink-0 rounded-full";
const filterCountBase =
  "ml-auto rounded-[10px] border px-1.5 py-px text-[0.7rem] group-[.active]:border-[rgba(79,124,255,0.3)] group-[.active]:bg-[rgba(79,124,255,0.2)] group-[.active]:text-[var(--accent)]";

interface TopicFilterButtonProps {
  active: boolean;
  count: number;
  topic: Topic;
  onClick: () => void;
  isComplete?: boolean;
  percentage?: number;
}

export function TopicFilterButton({
  active,
  count,
  topic,
  onClick,
  isComplete,
  percentage,
}: TopicFilterButtonProps) {
  return (
    <button
      className={`group ${active ? "active" : ""} ${filterButtonBase} ${filterButtonState(active)} ${
        isComplete && !active ? "bg-green-500/5 text-green-700 hover:bg-green-500/10" : ""
      } overflow-hidden`}
      type="button"
      onClick={onClick}
    >
      {/* Progress Background */}
      {!isComplete && !active && percentage !== undefined && percentage > 0 && (
        <div
          className="absolute left-0 bottom-0 top-0 bg-[var(--text3)] opacity-5 pointer-events-none transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      )}

      {isComplete && !active ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-green-600"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <span className={filterDotBase} style={{ background: topic.color }} />
      )}
      <span className="relative z-10">{topic.name}</span>
      <span
        className={`${filterCountBase} relative z-10 border-[var(--border)] bg-[var(--bg3)] text-[var(--text3)] ${
          isComplete && !active ? "border-green-500/20 bg-green-500/10 text-green-600" : ""
        }`}
      >
        {count}
      </span>
    </button>
  );
}

interface YearFilterButtonProps {
  active: boolean;
  year: string;
  onClick: () => void;
}

export function YearFilterButton({ active, year, onClick }: YearFilterButtonProps) {
  return (
    <button
      className={`m-[3px] inline-flex cursor-pointer items-center rounded-[20px] border px-2.5 py-1 font-['Outfit',sans-serif] text-xs transition-all hover:border-[var(--accent)] hover:text-[var(--text)] ${
        active
          ? "border-[var(--accent)] bg-[rgba(79,124,255,0.15)] text-[var(--accent)]"
          : "border-[var(--border)] text-[var(--text3)]"
      }`}
      type="button"
      onClick={onClick}
    >
      {year}
    </button>
  );
}

interface TypeFilterButtonProps {
  active: boolean;
  dotClassName?: string;
  label: string;
  onClick: () => void;
}

export function TypeFilterButton({ active, dotClassName, label, onClick }: TypeFilterButtonProps) {
  const dotColor =
    dotClassName === "regular-dot"
      ? "bg-[var(--t4)]"
      : dotClassName === "back-dot"
        ? "bg-[var(--t2)]"
        : "bg-[#888]";

  return (
    <button
      className={`group ${active ? "active" : ""} ${filterButtonBase} ${filterButtonState(active)}`}
      type="button"
      onClick={onClick}
    >
      <span className={`${filterDotBase} ${dotColor}`} /> {label}
    </button>
  );
}
