import { Header } from "../components/Header";
import { ProgressDialog } from "../components/ProgressDialog";
import { QuestionContent } from "../components/QuestionContent";
import { lazy, Suspense } from "react";
import { useQuestionExplorer } from "../hooks/useQuestionExplorer";
import { useQuestionFilters } from "../hooks/useQuestionFilters";
import { parseAsBoolean, useQueryState } from "nuqs";
import { DesktopGuard } from "../components/DesktopGuard";
import Q from "../data/questions";

const QuestionDetailView = lazy(() =>
  import("../components/QuestionDetailView").then((m) => ({ default: m.QuestionDetailView })),
);

function Home() {
  const [isProgressOpen, setIsProgressOpen] = useQueryState(
    "progress",
    parseAsBoolean.withDefault(false),
  );
  const filters = useQuestionFilters();
  const { filteredQuestions, viewTitle, years } = useQuestionExplorer(filters);

  const selectedQuestion = Q.find((q) => q.id === filters.selectedQuestionId);

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
          className="flex flex-col overflow-hidden border-r border-transparent data-[selected=true]:border-[var(--border)]"
          data-selected={!!selectedQuestion}
          style={{
            width: selectedQuestion ? "380px" : "100%",
            flexShrink: 0,
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

              <div>
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
          className="absolute right-0 top-0 bottom-0 z-10 flex flex-col transition-[transform,opacity] duration-300 bg-[var(--bg)] ease-[cubic-bezier(0.2,0,0,1)]"
          style={{
            width: "calc(100% - 380px)",
            transform: selectedQuestion ? "translateX(0)" : "translateX(100%)",
            opacity: selectedQuestion ? 1 : 0,
            visibility: selectedQuestion ? "visible" : "hidden",
            willChange: "transform, opacity",
          }}
        >
          {selectedQuestion && (
            <Suspense fallback={null}>
              <QuestionDetailView
                key={selectedQuestion.id}
                question={selectedQuestion}
                onClose={handleCloseDetail}
              />
            </Suspense>
          )}
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <button
          onClick={() => setIsProgressOpen(true)}
          className="flex items-center gap-2 bg-[var(--text)] text-[var(--bg)] px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all active:scale-95 font-bold text-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20v-6M6 20V10M18 20V4" />
          </svg>
          Check Progress
        </button>
      </div>

      <ProgressDialog isOpen={isProgressOpen} onClose={() => setIsProgressOpen(false)} />
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
