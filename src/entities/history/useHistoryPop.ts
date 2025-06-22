import { useHistoryStore } from "./history";

export const useHistoryPop = () => useHistoryStore(store => store.pop);