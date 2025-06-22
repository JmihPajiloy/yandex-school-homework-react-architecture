import { useHistoryStore } from "./history";

export const useHistoryClear = () => useHistoryStore((state) => state.clear);
