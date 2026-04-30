import type { Question } from "../data/questions";

interface QuestionCardProps {
  question: Question;
}

const typeClass = {
  Back: "border-[rgba(255,107,107,0.2)] bg-[rgba(255,107,107,0.12)] text-[#ff8585]",
  Regular: "border-[rgba(56,201,160,0.2)] bg-[rgba(56,201,160,0.12)] text-[var(--t4)]",
} as const;

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div
      className="relative rounded-[10px] border border-l-3 border-[var(--border)] bg-[var(--bg2)] px-[18px] py-4 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[var(--border2)] hover:shadow-[var(--shadow)] data-[t='1']:border-l-[var(--t1)] data-[t='2']:border-l-[var(--t2)] data-[t='3']:border-l-[var(--t3)] data-[t='4']:border-l-[var(--t4)] data-[t='5']:border-l-[var(--t5)] data-[t='6']:border-l-[var(--t6)] data-[t='7']:border-l-[var(--t7)] data-[t='8']:border-l-[var(--t8)] data-[t='9']:border-l-[var(--t9)] data-[t='10']:border-l-[var(--t10)] data-[t='11']:border-l-[var(--t11)] data-[t='12']:border-l-[var(--t12)]"
      data-t={question.t}
    >
      <div className="mb-2.5 flex items-start gap-2.5">
        <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-[5px] border border-[var(--border2)] bg-[var(--bg3)] px-2 py-[3px] font-['JetBrains_Mono',monospace] text-[11px] font-medium text-[var(--text3)]">
          {question.qno}
        </span>
        <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-[5px] border border-[var(--border)] bg-[var(--tag-bg)] px-2 py-[3px] text-[11.5px] text-[var(--text3)]">
          {question.year}
        </span>
        <span
          className={`mt-[3px] shrink-0 rounded border px-[7px] py-[3px] text-[10px] font-semibold tracking-[0.05em] uppercase ${typeClass[question.type]}`}
        >
          {question.type}
        </span>
      </div>
      <div className="q-text flex-1 text-sm leading-[1.7] text-[var(--text)]">
        {question.text}
        {question.sub ? (
          <div className="mt-1.5 ml-3.5 border-l-2 border-[var(--border2)] pl-3">
            {question.sub.map((subQuestion) => (
              <div
                className="mt-[5px] text-[13.5px] text-[var(--text2)] first:mt-[3px]"
                key={subQuestion}
              >
                {subQuestion}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
