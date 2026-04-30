import type { Question } from "../data/questions";
import TOPICS, { type TopicId } from "../data/topics";
import { sortQuestionsByYear } from "../lib/questions";
import type { ActiveYear, ViewMode } from "../types/filters";
import { QuestionGrid } from "./QuestionGrid";

interface QuestionContentProps {
  activeTopic: TopicId | 0;
  activeYear: ActiveYear;
  questions: Question[];
  search: string;
  viewMode: ViewMode;
  onQuestionSelect?: (question: Question) => void;
}

export function QuestionContent({
  activeTopic,
  activeYear,
  questions,
  search,
  viewMode,
  onQuestionSelect,
}: QuestionContentProps) {
  if (questions.length === 0) {
    return (
      <div className="px-5 py-24 text-center font-[family:var(--serif)] text-[var(--text3)]">
        <div className="text-xl">No questions found.</div>
        <div className="mt-2 text-[var(--text2)]">Try adjusting your filters.</div>
      </div>
    );
  }

  if (activeTopic === 0 && activeYear === "all" && search.trim() === "") {
    return (
      <>
        {TOPICS.map((topic) => {
          const topicQuestions = questions.filter((question) => question.t === topic.id);
          if (topicQuestions.length === 0) return null;

          return (
            <div className="mb-14" key={topic.id}>
              <div className="mb-8 border-b border-[var(--border2)] pb-3">
                <h2 className="font-[family:var(--serif)] text-2xl font-bold text-[var(--text)] tracking-tight">
                  {topic.name}
                </h2>
              </div>
              <QuestionGrid questions={topicQuestions} viewMode={viewMode} onQuestionSelect={onQuestionSelect} />
            </div>
          );
        })}
      </>
    );
  }

  return <QuestionGrid questions={sortQuestionsByYear(questions)} viewMode={viewMode} onQuestionSelect={onQuestionSelect} />;
}
