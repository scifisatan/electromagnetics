import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

import type { TopicId } from "../data/topics";
import type { ActiveType, ActiveYear } from "../types/filters";

export function useQuestionFilters() {
  const [activeTopic, setActiveTopic] = useQueryState("topic", parseAsInteger.withDefault(0));

  const [activeYear, setActiveYear] = useQueryState("year", parseAsString.withDefault("all"));

  const [activeType, setActiveType] = useQueryState("type", parseAsString.withDefault("all"));

  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));

  const [selectedQuestionId, setSelectedQuestionId] = useQueryState(
    "id",
    parseAsString.withDefault(""),
  );

  const resetFilters = () => {
    void setActiveTopic(null);
    void setActiveYear(null);
    void setActiveType(null);
    void setSearch(null);
    void setSelectedQuestionId(null);
  };

  return {
    activeTopic: activeTopic as TopicId | 0,
    activeYear: activeYear as ActiveYear,
    activeType: activeType as ActiveType,
    search,
    selectedQuestionId,
    setSelectedQuestionId,
    setActiveTopic,
    setActiveYear,
    setActiveType,
    setSearch,
    resetFilters,
  };
}
