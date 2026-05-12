import * as React from "react";
import TOPICS from "../data/topics";
import { useStudyProgress } from "../hooks/useStudyProgress";

interface ProgressDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProgressDialog({ isOpen, onClose }: ProgressDialogProps) {
  const progress = useStudyProgress();

  // Lock scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ isolation: "isolate" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="relative w-full max-w-md bg-[var(--bg)] rounded-xl shadow-2xl border border-[var(--border)] flex flex-col overflow-hidden"
        style={{
          animation: "progress-dialog-in 0.2s ease-out forwards",
        }}
      >
        <div className="p-4 border-b border-[var(--border)] flex items-center justify-between bg-[var(--bg2)]">
          <div>
            <h2 className="text-lg font-bold font-[family:var(--serif)] text-[var(--text)]">
              Study Progress
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[var(--bg3)] text-[var(--text3)] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Overall Stats */}
          <div className="bg-[var(--bg3)]/50 rounded-lg p-4 border border-[var(--border)]">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text3)]">
                Overall Completion
              </span>
              <span className="text-xl font-mono font-bold text-[var(--accent)]">
                {Math.round(progress.total.percentage)}%
              </span>
            </div>
            <div className="h-2 w-full bg-[var(--bg)] rounded-full overflow-hidden border border-[var(--border)] shadow-inner">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-1000 ease-out"
                style={{ width: `${progress.total.percentage}%` }}
              />
            </div>
            <p className="mt-2 text-[12px] text-center text-[var(--text2)]">
              <span className="font-bold">{progress.total.completed}</span> /{" "}
              <span className="font-bold">{progress.total.total}</span> questions completed
            </p>
          </div>

          {/* Topics List - More Compact */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--text3)] px-1">
              By Topic
            </h3>
            <div className="grid gap-1.5">
              {TOPICS.map((topic) => {
                const topicProg = progress.topics.find((t) => t.topicId === topic.id);
                if (!topicProg) return null;

                const isComplete = topicProg.completed === topicProg.total && topicProg.total > 0;

                return (
                  <div
                    key={topic.id}
                    className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-[var(--bg2)] transition-colors"
                  >
                    <div
                      className="w-1.5 h-6 rounded-full shrink-0"
                      style={{ backgroundColor: topic.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[13px] font-medium text-[var(--text)] truncate mr-2">
                          {topic.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {isComplete && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                          <span className="text-[11px] font-mono font-bold text-[var(--text3)] whitespace-nowrap">
                            {topicProg.completed}/{topicProg.total}
                          </span>
                        </div>
                      </div>
                      <div className="h-1 w-full bg-[var(--bg3)] rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-700 ease-out"
                          style={{
                            width: `${topicProg.percentage}%`,
                            backgroundColor: topic.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-3 bg-[var(--bg2)] border-t border-[var(--border)]">
          <button
            onClick={onClose}
            className="w-full py-2 bg-[var(--text)] text-[var(--bg)] rounded-lg font-bold text-xs hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
