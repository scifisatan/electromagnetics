import { useLocalStorage } from "./useLocalStorage";

export interface QuestionData {
  notes: string;
  isDone: boolean;
}

export function useQuestionData(questionId: string) {
  // Store notes individually as before
  const [data, setData] = useLocalStorage<QuestionData>(`question-data-${questionId}`, {
    notes: "",
    isDone: false,
  });

  // Store completed IDs in a central list for progress tracking
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>("completed-questions", []);

  // Sync isDone from the central list
  const isDone = completedIds.includes(questionId);

  // Migration: If the old data had isDone=true but it's not in completedIds yet
  if (data.isDone && !isDone) {
    setCompletedIds((prev) => [...new Set([...prev, questionId])]);
  }

  const setNotes = (notes: string | ((prev: string) => string)) =>
    setData((prev) => ({
      ...prev,
      notes: typeof notes === "function" ? notes(prev.notes) : notes,
    }));

  const setIsDone = (done: boolean | ((prev: boolean) => boolean)) => {
    const newValue = typeof done === "function" ? done(isDone) : done;

    if (newValue) {
      setCompletedIds((prev) => (prev.includes(questionId) ? prev : [...prev, questionId]));
    } else {
      setCompletedIds((prev) => prev.filter((id) => id !== questionId));
    }

    // Also update the local key for consistency/legacy support
    setData((prev) => ({ ...prev, isDone: newValue }));
  };

  return {
    notes: data.notes,
    isDone,
    setNotes,
    setIsDone,
  };
}
