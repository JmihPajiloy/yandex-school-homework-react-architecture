import { useHistoryStore } from "./history";

export const useHistory = () => useHistoryStore(store => store.history);