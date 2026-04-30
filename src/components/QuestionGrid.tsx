import type { Question } from "../data/questions";
import type { ViewMode } from "../types/filters";
import { QuestionCard } from "./QuestionCard";

interface QuestionGridProps {
  questions: Question[];
  viewMode: ViewMode;
}

export function QuestionGrid({ questions, viewMode }: QuestionGridProps) {
  return (
    <div className="flex flex-col gap-2">
      {questions.map((question) => (
        <QuestionCard key={`${question.year}-${question.qno}-${question.t}`} question={question} />
      ))}
    </div>
  );
}
