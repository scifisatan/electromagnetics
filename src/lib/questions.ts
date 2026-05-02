import Q, { type Question } from "../data/questions";
import type { ActiveType, ActiveYear } from "../types/filters";
import type { TopicId } from "../data/topics";

export function getYears(): string[] {
  const years = new Set<string>();
  for (const question of Q) {
    for (const occurrence of question.occurrences) {
      years.add(occurrence.year);
    }
  }
  return Array.from(years).sort((a, b) => {
    const yearA = Number.parseInt(a.split(" ")[0] ?? "", 10);
    const yearB = Number.parseInt(b.split(" ")[0] ?? "", 10);
    return yearB - yearA;
  });
}

export function getTopicCounts(topicIds: TopicId[]): Map<TopicId, number> {
  return new Map<TopicId, number>(
    topicIds.map((topicId) => [topicId, Q.filter((question) => question.t === topicId).length]),
  );
}

export function getViewTitle(
  activeTopic: TopicId | 0,
  activeYear: ActiveYear,
  filteredQuestionCount: number,
  topicName?: string,
): string {
  let title = "All Questions";

  if (activeTopic !== 0) {
    title = topicName ?? "Questions";
  } else if (activeYear !== "all") {
    title = `${activeYear} - Questions`;
  }

  return `${title} (${filteredQuestionCount})`;
}

export function filterQuestions(
  questions: Question[],
  {
    activeTopic,
    activeType,
    activeYear,
    search,
  }: {
    activeTopic: TopicId | 0;
    activeType: ActiveType;
    activeYear: ActiveYear;
    search: string;
  },
): Question[] {
  const normalizedSearch = search.trim().toLowerCase();

  return questions.filter((question) => {
    if (activeTopic !== 0 && question.t !== activeTopic) return false;

    // Check if any occurrence matches the year and type filters
    const hasMatchingOccurrence = question.occurrences.some((occ) => {
      const yearMatch = activeYear === "all" || occ.year === activeYear;
      const typeMatch = activeType === "all" || occ.type === activeType;
      return yearMatch && typeMatch;
    });

    if (!hasMatchingOccurrence) return false;

    if (normalizedSearch) {
      const occurrencesText = question.occurrences.map((o) => `${o.year} ${o.qno}`).join(" ");
      const haystack =
        `${question.text} ${occurrencesText} ${(question.sub ?? []).join(" ")}`.toLowerCase();
      if (!haystack.includes(normalizedSearch)) return false;
    }

    return true;
  });
}

export function sortQuestionsByYear(questions: Question[]): Question[] {
  return [...questions].sort((a, b) => {
    // Sort by the latest year in occurrences
    const getLatestYear = (q: Question) => {
      return Math.max(
        ...q.occurrences.map((o) => Number.parseInt(o.year.split(" ")[0] ?? "0", 10)),
      );
    };

    const yearA = getLatestYear(a);
    const yearB = getLatestYear(b);

    if (yearB !== yearA) return yearB - yearA;

    // If years are same, sort by the first occurrence's qno
    return a.occurrences[0].qno.localeCompare(b.occurrences[0].qno);
  });
}
