import renderMathInElement from "katex/contrib/auto-render";
import { useEffect, useRef } from "react";

import { Header } from "../components/Header";
import { QuestionContent } from "../components/QuestionContent";
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
    <div className="min-h-screen bg-[var(--bg)]">
      <Header
        questionCount={filteredQuestions.length}
        search={filters.search}
        onSearchChange={filters.setSearch}
        activeTopic={filters.activeTopic}
        activeType={filters.activeType}
        activeYear={filters.activeYear}
        onTopicChange={filters.setActiveTopic}
        onTypeChange={filters.setActiveType}
        onYearChange={filters.setActiveYear}
        topicCounts={topicCounts}
        years={years}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 min-[901px]:px-8 min-[901px]:py-12">
        <div className="mb-10 font-[family:var(--serif)] text-[1.4rem] font-bold text-[var(--text)] tracking-tight">
          {viewTitle}
          <span className="ml-3 text-[1rem] font-normal text-[var(--text3)]">
            {filteredQuestions.length} questions
          </span>
        </div>

        <div ref={contentRef}>
          <QuestionContent
            activeYear={filters.activeYear}
            activeTopic={filters.activeTopic}
            questions={filteredQuestions}
            search={filters.search}
            viewMode="list"
          />
        </div>
      </main>
    </div>
  );
}
