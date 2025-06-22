import { create } from "zustand/react";
import { persist } from "zustand/middleware";
import type { HistoryStore } from "./types";

export const useHistoryStore = create<HistoryStore>()(
  persist(
    (set) => ({
      history: [],
      push: (item) => set((state) => ({ history: [...state.history, item] })),
      pop: (index) =>
        set((state) => ({
          history: state.history.filter((_, i) => i !== index),
        })),
      clear: () => set(() => ({ history: [] })),
    }),
    {
      name: "history-storage",
    },
  ),
);
