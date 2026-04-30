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

  const setNotes = (notes: string) => setData((prev) => ({ ...prev, notes }));
  const setIsDone = (isDone: boolean) => setData((prev) => ({ ...prev, isDone }));

  return {
    notes: data.notes,
    isDone: data.isDone,
    setNotes,
    setIsDone,
  };
}
