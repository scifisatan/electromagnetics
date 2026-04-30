import renderMathInElement from "katex/contrib/auto-render";
import { useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router";

import { Header } from "../components/Header";
import { QuestionContent } from "../components/QuestionContent";
import { QuestionDetail } from "../components/QuestionDetail";
import { useQuestionExplorer } from "../hooks/useQuestionExplorer";
import { useQuestionFilters } from "../hooks/useQuestionFilters";
import Q from "../data/questions";

function QuestionDetailRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Decode the URL param as it may contain spaces (e.g. "2082 Shrawan")
  const decodedId = id ? decodeURIComponent(id) : "";
  const question = Q.find((q) => `${q.year}-${q.qno}-${q.t}` === decodedId);

  if (!question) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center flex-col gap-4">
        <div className="text-xl text-[var(--text)]">Question not found</div>
        <button onClick={() => navigate("/")} className="text-blue-500 hover:underline">
          Go back home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <QuestionDetail question={question} onBack={() => navigate("/")} />
    </div>
  );
}

function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const filters = useQuestionFilters();
  const { filteredQuestions, topicCounts, viewTitle, years } = useQuestionExplorer(filters);
  const navigate = useNavigate();

  useEffect(() => {
    if (!contentRef.current) return;

    renderMathInElement(contentRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }, [filteredQuestions]);

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
            onQuestionSelect={(q) => navigate(`/question/${encodeURIComponent(`${q.year}-${q.qno}-${q.t}`)}`)}
          />
        </div>
      </main>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question/:id" element={<QuestionDetailRoute />} />
    </Routes>
  );
}
