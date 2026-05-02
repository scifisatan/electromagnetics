import renderMathInElement from "katex/contrib/auto-render";
import { useEffect, useRef } from "react";

import { Header } from "../components/Header";
import { QuestionContent } from "../components/QuestionContent";
import { QuestionDetailView } from "../components/QuestionDetailView";
import { useQuestionExplorer } from "../hooks/useQuestionExplorer";
import { useQuestionFilters } from "../hooks/useQuestionFilters";
import { DesktopGuard } from "../components/DesktopGuard";
import Q from "../data/questions";

function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const filters = useQuestionFilters();
  const { filteredQuestions, viewTitle, years } = useQuestionExplorer(filters);

  const selectedQuestion = Q.find((q) => q.id === filters.selectedQuestionId);

  useEffect(() => {
    if (!contentRef.current) return;

    renderMathInElement(contentRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }, [filteredQuestions, filters.selectedQuestionId]);

  const handleQuestionSelect = (q: any) => {
    void filters.setSelectedQuestionId(q.id, { shallow: true });
  };

  const handleCloseDetail = () => {
    void filters.setSelectedQuestionId(null, { shallow: true });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg)]">
      <div id="split-container-home" className="flex-1 flex overflow-hidden relative">
        {/* Main Content Area (List) */}
        <div
          className="flex flex-col transition-all duration-300 overflow-hidden"
          style={{
            width: selectedQuestion ? "380px" : "100%",
            flexShrink: 0,
            borderRight: selectedQuestion ? "1px solid var(--border)" : "0px solid transparent",
          }}
        >
          {/* Header inside the list container */}
          <div
            className={`flex-shrink-0 ${selectedQuestion ? "bg-[var(--bg)] border-b border-[var(--border)]" : ""}`}
          >
            <Header
              search={filters.search}
              onSearchChange={filters.setSearch}
              activeTopic={filters.activeTopic}
              activeType={filters.activeType}
              activeYear={filters.activeYear}
              onTopicChange={filters.setActiveTopic}
              onTypeChange={filters.setActiveType}
              onYearChange={filters.setActiveYear}
              years={years}
              onResetFilters={filters.resetFilters}
              compact={!!selectedQuestion}
            />
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <main
              className={`mx-auto w-full ${
                selectedQuestion
                  ? "px-4 py-6"
                  : "max-w-4xl px-4 py-8 min-[901px]:px-8 min-[901px]:py-12"
              }`}
            >
              <div
                className={`mb-10 font-[family:var(--serif)] font-bold text-[var(--text)] tracking-tight flex items-baseline ${
                  selectedQuestion ? "text-lg" : "text-[1.4rem]"
                }`}
              >
                {viewTitle}
                <span
                  className={`ml-3 font-normal text-[var(--text3)] ${
                    selectedQuestion ? "text-xs" : "text-[1rem]"
                  }`}
                >
                  {filteredQuestions.length} questions
                </span>
              </div>

              <div ref={contentRef}>
                <QuestionContent
                  activeYear={filters.activeYear}
                  activeTopic={filters.activeTopic}
                  questions={filteredQuestions}
                  search={filters.search}
                  activeQuestionId={filters.selectedQuestionId || undefined}
                  onQuestionSelect={handleQuestionSelect}
                />
              </div>
            </main>
          </div>
        </div>

        {/* Detail Panel */}
        <div
          className="flex-1 min-w-0 flex flex-col transition-all duration-300 bg-[var(--bg)]"
          style={{
            transform: selectedQuestion ? "translateX(0)" : "translateX(100%)",
            opacity: selectedQuestion ? 1 : 0,
            visibility: selectedQuestion ? "visible" : "hidden",
          }}
        >
          {selectedQuestion && (
            <QuestionDetailView
              key={selectedQuestion.id}
              question={selectedQuestion}
              onClose={handleCloseDetail}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
      <DesktopGuard />
      <div id="app-root" className="max-[900px]:hidden">
        <Home />
      </div>
    </>
  );
}
