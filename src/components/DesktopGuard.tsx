export function DesktopGuard() {
  return (
    <div className="fixed inset-0 z-[10000] hidden flex-col items-center justify-center bg-[var(--bg)] p-10 text-center max-[900px]:flex">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg2)] opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(27,54,93,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[360px] animate-[guard-fade-in_0.8s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="mx-auto mb-8 h-20 w-20 text-[var(--accent)] opacity-90 drop-shadow-[0_4px_12px_rgba(27,54,93,0.1)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" />
            <path d="M2 20h20" />
            <path d="M7 24h10" />
            <path d="M12 20v4" />
          </svg>
        </div>

        <h1 className="mb-5 font-[family:var(--serif)] text-[1.75rem] font-bold leading-tight tracking-tight text-[var(--text)]">
          Desktop Experience Recommended
        </h1>

        <p className="mb-8 text-[1rem] leading-relaxed text-[var(--text2)]">
          Electromagnetics EX 503 is designed for a rich, side-by-side study experience that works
          best on larger screens.
        </p>

        <div className="mx-auto mb-8 h-px w-10 bg-[var(--border)]" />

        <p className="text-[0.85rem] font-medium uppercase tracking-[0.05em] text-[var(--text3)]">
          Please switch to a desktop or a larger tablet for the full experience.
        </p>
      </div>
    </div>
  );
}
