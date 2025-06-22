import { useHistoryStore } from "./history";

export const useHistoryPush = () => useHistoryStore(store => store.push);