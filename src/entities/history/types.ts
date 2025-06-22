import type { AggregateFileResponse } from "@/entities/api";

export type HistoryItem =
  | {
      filename: string;
      date: string;
      isSuccess: false;
    }
  | {
      filename: string;
      date: string;
      isSuccess: true;
      stats: AggregateFileResponse;
    };

export type HistoryStore = {
  history: HistoryItem[];
  push: (item: HistoryItem) => void;
  pop: (index: number) => void;
  clear: () => void;
};
