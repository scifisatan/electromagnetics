import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";

interface QuestionDetailProps {
  question: Question;
  onBack: () => void;
}

export function QuestionDetail({ question, onBack }: QuestionDetailProps) {
  const questionId = `${question.year}-${question.qno}-${question.t}`;
  const { notes, isDone, setNotes, setIsDone } = useQuestionData(questionId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    renderMathInElement(containerRef.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }, [question]);

  return (
    <div ref={containerRef} className="mx-auto max-w-4xl px-4 py-8 min-[901px]:px-8 min-[901px]:py-12 flex flex-col min-h-screen">
      <button
        onClick={onBack}
        className="mb-8 flex w-fit items-center gap-2 text-[var(--text2)] hover:text-[var(--text)] transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to questions</span>
      </button>

      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="font-[family:var(--serif)] text-xl font-semibold min-w-[2rem] pt-0.5 text-[var(--text2)]">
            {question.qno}.
          </div>
          <div className="flex-1">
            <div className="q-text font-[family:var(--serif)] text-xl leading-[1.8] text-[var(--text)]">
              {question.text}
              {question.sub ? (
                <div className="mt-6 flex flex-col gap-4 ml-2">
                  {question.sub.map((subQuestion, index) => (
                    <div className="flex gap-4 text-lg" key={subQuestion}>
                      <span className="text-[var(--text3)] font-medium">
                        ({String.fromCharCode(97 + index)})
                      </span>
                      <div>{subQuestion}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-3 font-[family:var(--sans)] text-sm uppercase tracking-wider font-semibold">
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

              <button
                onClick={() => setIsDone(!isDone)}
                className={`ml-auto flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isDone
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    : "bg-[var(--bg2)] text-[var(--text2)] hover:bg-[var(--bg3)]"
                }`}
              >
                {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                {isDone ? "Completed" : "Mark as Done"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 border-t border-[var(--border2)] pt-8">
        <label htmlFor="notes" className="font-[family:var(--serif)] text-2xl font-bold text-[var(--text)] tracking-tight">
          Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your notes, links, or insights here... Markdown is supported by you in your mind."
          className="flex-1 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 text-lg leading-relaxed text-[var(--text)] placeholder-[var(--text3)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
        />
      </div>
    </div>
  );
}
