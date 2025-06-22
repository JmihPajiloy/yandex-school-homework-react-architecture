import type { FileContextType } from "@/components/Upload/types.ts";
import { useHistoryPush } from "@/entities/history";
import { useState } from "react";
import { aggregateFile, type AggregateFileResponse } from "@/entities/api";

export type PartialContext = Pick<FileContextType, "file" | "setState">;

export const useAggregateFile = ({ file, setState }: PartialContext) => {
  const push = useHistoryPush();
  const [stats, setStats] = useState<AggregateFileResponse>();
  const action = async () => {
    if (!file) return;
    setState("pending");
    try {
      let lastInfo: AggregateFileResponse | null = null;
      for await (const item of aggregateFile(file)) {
        lastInfo = item;
        console.log(item);
        setStats(item);
      }
      if (!lastInfo) {
        throw new Error("Empty response!");
      }
      setState("success");
      push({
        date: new Date().toISOString(),
        isSuccess: true,
        filename: file.name,
        stats: lastInfo,
      });
    } catch (err) {
      console.warn(err);
      setState("error");
      push({
        date: new Date().toISOString(),
        isSuccess: false,
        filename: file.name,
      });
    }
  };

  return [stats, action] as const;
};
