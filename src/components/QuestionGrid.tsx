import type { Question } from "../data/questions";
import { QuestionCard } from "./QuestionCard";

interface QuestionGridProps {
  questions: Question[];
  onQuestionSelect?: (question: Question) => void;
  activeQuestionId?: string;
}

export function QuestionGrid({ questions, onQuestionSelect, activeQuestionId }: QuestionGridProps) {
  return (
    <div className="flex flex-col gap-1">
      {questions.map((question) => {
        const id = question.id;
        return (
          <QuestionCard
            key={id}
            question={question}
            isActive={id === activeQuestionId}
            onClick={() => onQuestionSelect?.(question)}
          />
        );
      })}
    </div>
  );
}
