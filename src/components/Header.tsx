interface HeaderProps {
  questionCount: number;
  search: string;
  onSearchChange: (search: string) => void;
}

export function Header({ questionCount, search, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-100 flex items-center gap-3 border-b border-[var(--border)] bg-[var(--bg2)] px-4 py-3 backdrop-blur-[10px] min-[901px]:gap-5 min-[901px]:px-7 min-[901px]:py-[18px]">
      <div>
        <h1 className="font-['Lora',serif] text-xl font-semibold whitespace-nowrap text-[var(--text)]">
          TU <span className="text-[var(--accent)]">Electromagnetics</span> EX 503
        </h1>
        <div className="mt-0.5 text-[0.78rem] text-[var(--text3)]">
          Tribhuvan University · BE II/I · Past Questions
        </div>
      </div>
      <div className="relative max-w-[480px] flex-1">
        <svg
          aria-hidden="true"
          className="absolute top-1/2 left-3 -translate-y-1/2 opacity-45"
          fill="none"
          height="15"
          viewBox="0 0 24 24"
          width="15"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="w-full rounded-lg border border-[var(--border2)] bg-[var(--bg3)] py-[9px] pr-3.5 pl-[38px] font-['Outfit',sans-serif] text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search questions..."
        />
      </div>
      <div className="whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg3)] px-2.5 py-[5px] text-[0.78rem] text-[var(--text3)]">
        Showing <span className="font-semibold text-[var(--accent)]">{questionCount}</span>{" "}
        questions
      </div>
    </header>
  );
}
