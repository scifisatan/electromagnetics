import type { Question } from "../data/questions";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="mb-8 flex gap-4 text-[var(--text)] transition-colors hover:bg-[var(--bg2)] rounded-lg p-2 -ml-2">
      <div className="font-[family:var(--serif)] text-base font-semibold min-w-[2rem] pt-0.5 text-[var(--text2)]">
        {question.qno}.
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
          <span className={`rounded px-2 py-1 border ${
            question.type === 'Back' ? 'border-red-200 bg-red-50 text-red-600' : 'border-emerald-200 bg-emerald-50 text-emerald-600'
          }`}>
            {question.type}
          </span>
        </div>
      </div>
    </div>
  );
}
