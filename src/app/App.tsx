import renderMathInElement from "katex/contrib/auto-render";
import { useEffect, useRef } from "react";

import { Header } from "../components/Header";
import { QuestionContent } from "../components/QuestionContent";
import { Sidebar } from "../components/Sidebar";
import { useQuestionExplorer } from "../hooks/useQuestionExplorer";
import { useQuestionFilters } from "../hooks/useQuestionFilters";

export function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const filters = useQuestionFilters();
  const { filteredQuestions, topicCounts, viewTitle, years } = useQuestionExplorer(filters);

  useEffect(() => {
    if (!contentRef.current) return;

    renderMathInElement(contentRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }, [filteredQuestions, filters.viewMode]);

  return (
    <>
      <Header
        questionCount={filteredQuestions.length}
        search={filters.search}
        onSearchChange={filters.setSearch}
      />

      <div className="flex min-h-[calc(100vh-65px)]">
        <Sidebar
          activeTopic={filters.activeTopic}
          activeType={filters.activeType}
          activeYear={filters.activeYear}
          topicCounts={topicCounts}
          years={years}
          onTopicChange={filters.setActiveTopic}
          onTypeChange={filters.setActiveType}
          onYearChange={filters.setActiveYear}
        />

        <main className="flex-1 overflow-x-hidden p-4 min-[901px]:px-7 min-[901px]:py-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex-1 font-['Lora',serif] text-[1.1rem] font-semibold text-[var(--text)]">
              {viewTitle}
            </div>
            <div aria-label="Question layout">
              <button
                className={`cursor-pointer rounded-l-md border border-r-0 px-3.5 py-1.5 font-['Outfit',sans-serif] text-xs transition-all ${
                  filters.viewMode === "grid"
                    ? "border-[rgba(79,124,255,0.3)] bg-[rgba(79,124,255,0.15)] text-[var(--accent)]"
                    : "border-[var(--border)] bg-[var(--bg3)] text-[var(--text3)]"
                }`}
                type="button"
                onClick={() => filters.setViewMode("grid")}
              >
                Grid
              </button>
              <button
                className={`cursor-pointer rounded-r-md border px-3.5 py-1.5 font-['Outfit',sans-serif] text-xs transition-all ${
                  filters.viewMode === "list"
                    ? "border-[rgba(79,124,255,0.3)] bg-[rgba(79,124,255,0.15)] text-(--accent)"
                    : "border-(--border) bg-(--bg3) text-(--text3)"
                }`}
                type="button"
                onClick={() => filters.setViewMode("list")}
              >
                List
              </button>
            </div>
          </div>

          <div ref={contentRef}>
            <QuestionContent
              activeYear={filters.activeYear}
              activeTopic={filters.activeTopic}
              questions={filteredQuestions}
              search={filters.search}
              viewMode={filters.viewMode}
            />
          </div>
        </main>
      </div>
    </>
  );
}
