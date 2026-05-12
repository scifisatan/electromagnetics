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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ isolation: "isolate" }}
    >
      {/* Backdrop - Kami warm-toned dark */}
      <div
        className="absolute inset-0 bg-[#141413]/60 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />

      {/* Dialog - Kami Parchment Surface */}
      <div
        className="relative w-full max-w-4xl bg-[#f5f4ed] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-[#e8e6dc] flex flex-col overflow-hidden max-h-[95vh]"
        style={{
          animation: "progress-dialog-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Header - Editorial Style */}
        <div className="pt-8 px-10 pb-2 flex items-start justify-between">
          <div className="border-l-[2.5pt] border-[#1B365D] pl-5">
            <span className="block text-[10px] font-bold uppercase tracking-[2px] text-[#6b6a64] mb-1">
              Assessment Report
            </span>
            <h2 className="text-3xl font-medium font-[family:var(--serif)] text-[#141413] leading-tight">
              Study Progress
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-[#e8e6dc] text-[#504e49] transition-colors -mr-2"
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-10 pb-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left Column: Summary (1/3) */}
            <div className="lg:w-1/3 flex flex-col pt-6">
              <div className="p-8 bg-[#faf9f5] border border-[#e8e6dc] rounded-xl flex-1 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[#1B365D] uppercase tracking-[1.5px] mb-6 block">
                  Overall Mastery
                </span>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-medium font-[family:var(--serif)] text-[#1B365D] tabular-nums tracking-tighter">
                      {Math.round(progress.total.percentage)}
                    </span>
                    <span className="text-2xl font-medium text-[#1B365D]/60">%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-full bg-[#e8e6dc] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1B365D] transition-all duration-1000 ease-out"
                      style={{ width: `${progress.total.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[12px] font-mono text-[#6b6a64] uppercase tracking-wider">
                    <span>Completed</span>
                    <span className="font-bold text-[#141413]">
                      {progress.total.completed} / {progress.total.total}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e8e6dc] text-[13px] text-[#504e49] leading-relaxed italic opacity-80">
                  Performance across {TOPICS.length} core electromagnetics modules.
                </div>
              </div>
            </div>

            {/* Right Column: Breakdown (2/3) */}
            <div className="lg:w-2/3 pt-6">
              <div className="flex items-center justify-between border-b border-[#e8e6dc] pb-3 mb-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[2px] text-[#1B365D]">
                  Topic Breakdown
                </h3>
                <span className="text-[10px] text-[#6b6a64] uppercase font-bold tracking-wider">
                  Status
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {/* Left Column (1-6) */}
                <div className="space-y-6">
                  {TOPICS.slice(0, Math.ceil(TOPICS.length / 2)).map((topic) => {
                    const topicProg = progress.topics.find((t) => t.topicId === topic.id);
                    if (!topicProg) return null;

                    const isComplete = topicProg.completed === topicProg.total && topicProg.total > 0;

                    return (
                      <div key={topic.id} className="flex flex-col py-1">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex gap-3 min-w-0">
                            <div
                              className="w-1.5 h-4 rounded-full mt-1 shrink-0"
                              style={{ backgroundColor: topic.color }}
                            />
                            <span className="text-[15px] font-medium text-[#3d3d3a] leading-tight">
                              {topic.name}
                            </span>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
                            <span className="text-[14px] font-mono font-bold text-[#141413] tabular-nums leading-none">
                              {Math.round(topicProg.percentage)}%
                            </span>
                            {isComplete ? (
                              <span className="text-[9px] font-bold text-[#1B365D] uppercase tracking-[0.5px]">
                                Mastered
                              </span>
                            ) : (
                              <span className="text-[10px] font-mono font-medium text-[#6b6a64]">
                                {topicProg.completed}/{topicProg.total}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="h-[3px] w-full bg-[#e8e6dc] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#1B365D] opacity-60 transition-all duration-700 ease-out"
                            style={{ width: `${topicProg.percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right Column (7-12) */}
                <div className="space-y-6">
                  {TOPICS.slice(Math.ceil(TOPICS.length / 2)).map((topic) => {
                    const topicProg = progress.topics.find((t) => t.topicId === topic.id);
                    if (!topicProg) return null;

                    const isComplete = topicProg.completed === topicProg.total && topicProg.total > 0;

                    return (
                      <div key={topic.id} className="flex flex-col py-1">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex gap-3 min-w-0">
                            <div
                              className="w-1.5 h-4 rounded-full mt-1 shrink-0"
                              style={{ backgroundColor: topic.color }}
                            />
                            <span className="text-[15px] font-medium text-[#3d3d3a] leading-tight">
                              {topic.name}
                            </span>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
                            <span className="text-[14px] font-mono font-bold text-[#141413] tabular-nums leading-none">
                              {Math.round(topicProg.percentage)}%
                            </span>
                            {isComplete ? (
                              <span className="text-[9px] font-bold text-[#1B365D] uppercase tracking-[0.5px]">
                                Mastered
                              </span>
                            ) : (
                              <span className="text-[10px] font-mono font-medium text-[#6b6a64]">
                                {topicProg.completed}/{topicProg.total}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="h-[3px] w-full bg-[#e8e6dc] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#1B365D] opacity-60 transition-all duration-700 ease-out"
                            style={{ width: `${topicProg.percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action - Kami Secondary Button */}
        <div className="px-10 py-6 bg-[#faf9f5] border-t border-[#e8e6dc] flex justify-end">
          <button
            onClick={onClose}
            className="px-10 py-3 bg-[#e8e6dc] text-[#141413] rounded-md font-bold text-[11px] uppercase tracking-[1.5px] hover:bg-[#dcdaca] transition-colors"
          >
            Return to Study
          </button>
        </div>
      </div>


      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes progress-dialog-in {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e8e6dc;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dcdaca;
        }
      `,
        }}
      />
    </div>
  );
}
