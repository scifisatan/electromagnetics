import type { Question } from "../data/questions";
import { QuestionCard } from "./QuestionCard";

interface QuestionGridProps {
  questions: Question[];
  onQuestionSelect?: (question: Question) => void;
}

export function QuestionGrid({ questions, onQuestionSelect }: QuestionGridProps) {
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
