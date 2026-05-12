import { CheckCircle } from "./Icons";
import { Latex } from "./Latex";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";

interface QuestionCardProps {
  question: Question;
  onClick?: () => void;
  isActive?: boolean;
}

// Preload the editor chunk when the user hovers over a card
const preloadDetailView = () => import("../components/QuestionDetailView");

export function QuestionCard({ question, onClick, isActive }: QuestionCardProps) {
  const { isDone } = useQuestionData(question.id);

  return (
    <button
      onClick={onClick}
      onMouseEnter={preloadDetailView}
      className={`mb-4 flex gap-4 text-left w-full text-[var(--text)] transition-all rounded-xl p-3 cursor-pointer border ${
        isActive
          ? isDone
            ? "bg-emerald-50 border-emerald-200 shadow-sm ring-1 ring-emerald-100"
            : "bg-[var(--bg)] border-blue-200 shadow-sm ring-1 ring-blue-100"
          : isDone
            ? "bg-emerald-50/50 border-emerald-100 hover:bg-emerald-50"
            : "border-transparent hover:bg-[var(--bg2)]"
      }`}
    >
      <div className="font-[family:var(--serif)] text-base font-semibold min-w-[2rem] pt-0.5 text-[var(--text2)] flex flex-col items-center gap-2">
        {question.occurrences[0].qno}.
        {isDone && <CheckCircle className="text-emerald-500 w-4 h-4" />}
      </div>
      <div className="flex-1">
        <div className="q-text font-[family:var(--serif)] text-[1.1rem] leading-[1.8]">
          <Latex content={question.text} />
          {question.sub ? (
            <div className="mt-4 flex flex-col gap-3 ml-2">
              {question.sub.map((subQuestion, index) => (
                <div className="flex gap-3 text-[1.05rem]" key={subQuestion}>
                  <span className="text-[var(--text3)] font-medium">
                    ({String.fromCharCode(97 + index)})
                  </span>
                  <div>
                    <Latex content={subQuestion} />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 font-[family:var(--sans)] text-[0.7rem] uppercase tracking-wider font-semibold">
          {question.occurrences.map((occ) => (
            <div
              key={`${occ.year}-${occ.qno}`}
              className="flex items-center gap-1.5 bg-[var(--bg3)] border border-[var(--border)] rounded-md px-1.5 py-0.5"
            >
              <span className="text-[var(--text2)]">
                {occ.year} ({occ.qno})
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  occ.type === "Back" ? "bg-red-400" : "bg-emerald-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}
