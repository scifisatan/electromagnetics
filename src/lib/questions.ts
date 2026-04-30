import Q, { type Question } from "../data/questions";
import type { ActiveType, ActiveYear } from "../types/filters";
import type { TopicId } from "../data/topics";

export function getYears(): string[] {
  return [...new Set(Q.map((question) => question.year))].sort((a, b) => {
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
    if (activeYear !== "all" && question.year !== activeYear) return false;
    if (activeType !== "all" && question.type !== activeType) return false;

    if (normalizedSearch) {
      const haystack =
        `${question.text} ${question.year} ${(question.sub ?? []).join(" ")}`.toLowerCase();
      if (!haystack.includes(normalizedSearch)) return false;
    }

    return true;
  });
}

export function sortQuestionsByYear(questions: Question[]): Question[] {
  return [...questions].sort((a, b) => {
    const yearA = Number.parseInt(a.year.split(" ")[0] ?? "", 10);
    const yearB = Number.parseInt(b.year.split(" ")[0] ?? "", 10);
    if (yearB !== yearA) return yearB - yearA;
    return a.qno.localeCompare(b.qno);
  });
}
