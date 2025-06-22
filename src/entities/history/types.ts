export type HistoryItem = {
  filename: string;
  date: Date
  isSuccess: boolean;
}

export type HistoryStore = {
  history: HistoryItem[];
  push: (item: HistoryItem) => void;
  pop: (index: number) => void;
}