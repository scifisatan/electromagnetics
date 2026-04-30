import { useState } from "react";

import type { TopicId } from "../data/topics";
import type { ActiveType, ActiveYear, ViewMode } from "../types/filters";

export function useQuestionFilters() {
  const [activeTopic, setActiveTopic] = useState<TopicId | 0>(0);
  const [activeYear, setActiveYear] = useState<ActiveYear>("all");
  const [activeType, setActiveType] = useState<ActiveType>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [search, setSearch] = useState("");

  return {
    activeTopic,
    activeYear,
    activeType,
    viewMode,
    search,
    setActiveTopic,
    setActiveYear,
    setActiveType,
    setViewMode,
    setSearch,
  };
}
