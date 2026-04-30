import { useMemo } from "react";

import Q from "../data/questions";
import TOPICS from "../data/topics";
import { filterQuestions, getTopicCounts, getViewTitle, getYears } from "../lib/questions";
import type { ActiveType, ActiveYear } from "../types/filters";
import type { TopicId } from "../data/topics";

interface UseQuestionExplorerOptions {
  activeTopic: TopicId | 0;
  activeType: ActiveType;
  activeYear: ActiveYear;
  search: string;
}

export function useQuestionExplorer({
  activeTopic,
  activeType,
  activeYear,
  search,
}: UseQuestionExplorerOptions) {
  const years = useMemo(getYears, []);
  const topicCounts = useMemo(() => getTopicCounts(TOPICS.map((topic) => topic.id)), []);

  const filteredQuestions = useMemo(
    () => filterQuestions(Q, { activeTopic, activeType, activeYear, search }),
    [activeTopic, activeType, activeYear, search],
  );

  const viewTitle = useMemo(() => {
    const topicName = TOPICS.find((topic) => topic.id === activeTopic)?.name;
    return getViewTitle(activeTopic, activeYear, filteredQuestions.length, topicName);
  }, [activeTopic, activeYear, filteredQuestions.length]);

  return {
    filteredQuestions,
    topicCounts,
    viewTitle,
    years,
  };
}
