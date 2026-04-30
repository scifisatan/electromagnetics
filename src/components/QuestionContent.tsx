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
}

export function QuestionContent({
  activeTopic,
  activeYear,
  questions,
  search,
  viewMode,
}: QuestionContentProps) {
  if (questions.length === 0) {
    return (
      <div className="px-5 py-20 text-center text-[var(--text3)]">
        <div className="mb-3 text-5xl opacity-30">Search</div>
        <div>
          No questions found.
          <br />
          Try adjusting your filters.
        </div>
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
            <div className="mb-9" key={topic.id}>
              <div className="mb-3.5 flex items-center gap-2.5 border-b border-[var(--border)] pb-2.5">
                <div
                  className="flex items-center gap-[7px] rounded-[20px] px-3 py-[5px] text-[13px] font-semibold tracking-[0.01em]"
                  style={{ background: topic.bg, color: topic.color }}
                >
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: topic.color }}
                  />
                  {topic.name}
                </div>
                <span className="rounded-xl border border-[var(--border)] bg-[var(--bg3)] px-[9px] py-[3px] text-xs text-[var(--text3)]">
                  {topicQuestions.length} questions
                </span>
              </div>
              <QuestionGrid questions={topicQuestions} viewMode={viewMode} />
            </div>
          );
        })}
      </>
    );
  }

  return <QuestionGrid questions={sortQuestionsByYear(questions)} viewMode={viewMode} />;
}
