import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

import type { TopicId } from "../data/topics";
import type { ActiveType, ActiveYear, ViewMode } from "../types/filters";

export function useQuestionFilters() {
  const [activeTopic, setActiveTopic] = useQueryState(
    "topic",
    parseAsInteger.withDefault(0)
  );
  
  const [activeYear, setActiveYear] = useQueryState(
    "year",
    parseAsString.withDefault("all")
  );

  const [activeType, setActiveType] = useQueryState(
    "type",
    parseAsString.withDefault("all")
  );

  const [viewMode, setViewMode] = useQueryState(
    "view",
    parseAsString.withDefault("grid")
  );

  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withDefault("")
  );

  return {
    activeTopic: activeTopic as TopicId | 0,
    activeYear: activeYear as ActiveYear,
    activeType: activeType as ActiveType,
    viewMode: viewMode as ViewMode,
    search,
    setActiveTopic,
    setActiveYear,
    setActiveType,
    setViewMode,
    setSearch,
  };
}
