import type { Question } from "../data/questions";
import type { ViewMode } from "../types/filters";
import { QuestionCard } from "./QuestionCard";

interface QuestionGridProps {
  questions: Question[];
  viewMode: ViewMode;
  onQuestionSelect?: (question: Question) => void;
}

export function QuestionGrid({ questions, viewMode, onQuestionSelect }: QuestionGridProps) {
  return (
    <div className="flex flex-col gap-2">
      {questions.map((question) => (
        <QuestionCard 
          key={`${question.year}-${question.qno}-${question.t}`} 
          question={question} 
          onClick={() => onQuestionSelect?.(question)}
        />
      ))}
    </div>
  );
}
