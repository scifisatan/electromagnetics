import { useLocalStorage } from "./useLocalStorage";

export interface QuestionData {
  notes: string;
  isDone: boolean;
}

export function useQuestionData(questionId: string) {
  const [data, setData] = useLocalStorage<QuestionData>(`question-data-${questionId}`, {
    notes: "",
    isDone: false,
  });

  const setNotes = (notes: string | ((prev: string) => string)) =>
    setData((prev) => ({
      ...prev,
      notes: typeof notes === "function" ? notes(prev.notes) : notes,
    }));
  const setIsDone = (isDone: boolean | ((prev: boolean) => boolean)) =>
    setData((prev) => ({
      ...prev,
      isDone: typeof isDone === "function" ? isDone(prev.isDone) : isDone,
    }));

  return {
    notes: data.notes,
    isDone: data.isDone,
    setNotes,
    setIsDone,
  };
}
