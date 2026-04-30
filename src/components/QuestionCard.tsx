import { CheckCircle } from "lucide-react";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";

interface QuestionCardProps {
  question: Question;
  onClick?: () => void;
}

export function QuestionCard({ question, onClick }: QuestionCardProps) {
  const questionId = `${question.year}-${question.qno}-${question.t}`;
  const { isDone } = useQuestionData(questionId);

  return (
    <button
      onClick={onClick}
      className="mb-8 flex gap-4 text-left w-full text-[var(--text)] transition-colors hover:bg-[var(--bg2)] rounded-lg p-2 -ml-2 cursor-pointer"
    >
      <div className="font-[family:var(--serif)] text-base font-semibold min-w-[2rem] pt-0.5 text-[var(--text2)] flex flex-col items-center gap-2">
        {question.qno}.{isDone && <CheckCircle className="text-emerald-500 w-4 h-4" />}
      </div>
      <div className="flex-1">
        <div className="q-text font-[family:var(--serif)] text-[1.1rem] leading-[1.8]">
          {question.text}
          {question.sub ? (
            <div className="mt-4 flex flex-col gap-3 ml-2">
              {question.sub.map((subQuestion, index) => (
                <div className="flex gap-3 text-[1.05rem]" key={subQuestion}>
                  <span className="text-[var(--text3)] font-medium">
                    ({String.fromCharCode(97 + index)})
                  </span>
                  <div>{subQuestion}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex items-center gap-3 font-[family:var(--sans)] text-[0.75rem] uppercase tracking-wider font-semibold">
          <span className="rounded bg-[var(--bg3)] border border-[var(--border)] px-2 py-1 text-[var(--text2)]">
            {question.year}
          </span>
          <span
            className={`rounded px-2 py-1 border ${
              question.type === "Back"
                ? "border-red-200 bg-red-50 text-red-600"
                : "border-emerald-200 bg-emerald-50 text-emerald-600"
            }`}
          >
            {question.type}
          </span>
        </div>
      </div>
    </button>
  );
}
