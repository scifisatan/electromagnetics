import Q from "../data/questions";
import TOPICS, { type TopicId } from "../data/topics";
import type { ActiveType, ActiveYear } from "../types/filters";
import { TopicFilterButton, TypeFilterButton, YearFilterButton } from "./FilterButtons";

import { useStudyProgress } from "../hooks/useStudyProgress";

interface SidebarProps {
  activeTopic: TopicId | 0;
  activeType: ActiveType;
  activeYear: ActiveYear;
  topicCounts: Map<TopicId, number>;
  years: string[];
  onTopicChange: (topic: TopicId | 0) => void;
  onTypeChange: (type: ActiveType) => void;
  onYearChange: (year: ActiveYear) => void;
}

export function Sidebar({
  activeTopic,
  activeType,
  activeYear,
  topicCounts,
  years,
  onTopicChange,
  onTypeChange,
  onYearChange,
}: SidebarProps) {
  const progress = useStudyProgress();
  return (
    <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-[270px] min-w-[270px] shrink-0 overflow-y-auto border-r border-[var(--border)] bg-[var(--bg2)] px-4 py-5 min-[901px]:block">
      <div className="mb-6">
        <div className="mb-2.5 pl-1 text-[0.68rem] font-bold tracking-[0.1em] text-[var(--text3)] uppercase">
          By Topic
        </div>
        <button
          className={`group relative mb-0.5 flex w-full cursor-pointer items-center gap-2 rounded-[7px] px-2.5 py-[7px] text-left font-['Outfit',sans-serif] text-[13.5px] transition-all hover:bg-[var(--bg3)] hover:text-[var(--text)] ${
            activeTopic === 0 ? "active font-medium text-[var(--text)]" : "text-[var(--text2)]"
          }`}
          type="button"
          onClick={() => onTopicChange(0)}
        >
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#888]" /> All Topics
          <span className="ml-auto rounded-[10px] border border-[var(--border)] bg-[var(--bg3)] px-1.5 py-px text-[0.7rem] text-[var(--text3)] group-[.active]:border-[rgba(79,124,255,0.3)] group-[.active]:bg-[rgba(79,124,255,0.2)] group-[.active]:text-[var(--accent)]">
            {Q.length}
          </span>
        </button>
        {TOPICS.map((topic) => {
          const topicProgress = progress.topics.find((tp) => tp.topicId === topic.id);
          const isComplete = topicProgress && topicProgress.completed === topicProgress.total;
          const percentage = topicProgress?.percentage || 0;

          return (
            <TopicFilterButton
              active={activeTopic === topic.id}
              count={topicCounts.get(topic.id) ?? 0}
              key={topic.id}
              topic={topic}
              onClick={() => onTopicChange(topic.id)}
              isComplete={isComplete}
              percentage={percentage}
            />
          );
        })}
      </div>

      <div className="mb-6">
        <div className="mb-2.5 pl-1 text-[0.68rem] font-bold tracking-[0.1em] text-[var(--text3)] uppercase">
          By Exam Year
        </div>
        <div className="flex flex-wrap">
          <YearFilterButton
            active={activeYear === "all"}
            year="All Years"
            onClick={() => onYearChange("all")}
          />
          {years.map((year) => (
            <YearFilterButton
              active={activeYear === year}
              key={year}
              year={year}
              onClick={() => onYearChange(year)}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2.5 pl-1 text-[0.68rem] font-bold tracking-[0.1em] text-[var(--text3)] uppercase">
          By Type
        </div>
        <TypeFilterButton
          active={activeType === "all"}
          label="All"
          onClick={() => onTypeChange("all")}
        />
        <TypeFilterButton
          active={activeType === "Regular"}
          dotClassName="regular-dot"
          label="Regular"
          onClick={() => onTypeChange("Regular")}
        />
        <TypeFilterButton
          active={activeType === "Back"}
          dotClassName="back-dot"
          label="Back"
          onClick={() => onTypeChange("Back")}
        />
      </div>
    </aside>
  );
}
