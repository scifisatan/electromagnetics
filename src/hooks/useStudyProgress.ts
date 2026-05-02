import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Q from "../data/questions";
import TOPICS from "../data/topics";

export function useStudyProgress() {
  const [completedIds] = useLocalStorage<string[]>("completed-questions", []);

  const progress = useMemo(() => {
    const totalQuestions = Q.length;
    const completedCount = completedIds.length;
    const totalPercentage = totalQuestions > 0 ? (completedCount / totalQuestions) * 100 : 0;

    const topicProgress = TOPICS.map((topic) => {
      const topicQuestions = Q.filter((q) => q.t === topic.id);
      const topicCompletedCount = topicQuestions.filter((q) => completedIds.includes(q.id)).length;
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
