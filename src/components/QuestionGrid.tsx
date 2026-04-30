import type { Question } from "../data/questions";
import type { ViewMode } from "../types/filters";
import { QuestionCard } from "./QuestionCard";

interface QuestionGridProps {
  questions: Question[];
  viewMode: ViewMode;
}

export function QuestionGrid({ questions, viewMode }: QuestionGridProps) {
  return (
    <div
      className={`grid gap-3.5 ${
        viewMode === "list"
          ? "grid-cols-1"
          : "grid-cols-1 min-[901px]:grid-cols-[repeat(auto-fill,minmax(520px,1fr))]"
      }`}
    >
      {questions.map((question) => (
        <QuestionCard key={`${question.year}-${question.qno}-${question.t}`} question={question} />
      ))}
    </div>
  );
}
