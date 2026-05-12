import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Q from "../data/questions";
import TOPICS from "../data/topics";

export function useStudyProgress() {
  const [completedIds] = useLocalStorage<string[]>("completed-questions", []);

  const progress = useMemo(() => {
    // Filter completedIds to only include valid IDs that exist in our questions data
    // Also use a Set to handle potential duplicates in localStorage
    const validCompletedIdsSet = new Set(completedIds.filter((id) => Q.some((q) => q.id === id)));
    const validCompletedIds = Array.from(validCompletedIdsSet);

    const totalQuestions = Q.length;
    const completedCount = validCompletedIds.length;
    const totalPercentage = totalQuestions > 0 ? (completedCount / totalQuestions) * 100 : 0;

    const topicProgress = TOPICS.map((topic) => {
      const topicQuestions = Q.filter((q) => q.t === topic.id);
      const topicQuestionIds = new Set(topicQuestions.map((q) => q.id));
      const topicCompletedCount = validCompletedIds.filter((id) => topicQuestionIds.has(id)).length;
      const topicTotalCount = topicQuestions.length;
      const percentage = topicTotalCount > 0 ? (topicCompletedCount / topicTotalCount) * 100 : 0;

      return {
        topicId: topic.id,
        completed: topicCompletedCount,
        total: topicTotalCount,
        percentage,
      };
    });

    return {
      total: {
        completed: completedCount,
        total: totalQuestions,
        percentage: totalPercentage,
      },
      topics: topicProgress,
    };
  }, [completedIds]);

  return progress;
}
