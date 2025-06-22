import type { FileContextType } from "@/components/Upload/types.ts";
import { useHistoryPush } from "@/entities/history";
import { useState } from "react";

export type PartialContext = Pick<FileContextType, "file" | "setState">;

export type AggregateFileResponse = {
  average_spend_galactic: number;
  big_spent_at: number;
  big_spent_civ: string;
  big_spent_value: number;
  less_spent_at: number;
  less_spent_civ: string;
  less_spent_value: number;
  rows_affected: number;
  total_spend_galactic: number;
};

async function* aggregateFile(file: File, rows = 10000) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`http://localhost:3000/aggregate?rows=${rows}`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  if (!response.body) {
    throw new Error("Unable to retrieve data");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";
  let isFirstChunk = true;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      while (true) {
        const newlineIndex = buffer.indexOf("\n");
        if (newlineIndex === -1) break;

        const jsonStr = buffer.substring(0, newlineIndex).trim();
        buffer = buffer.substring(newlineIndex + 1);

        if (!jsonStr) {
          if (isFirstChunk) {
            isFirstChunk = false;
            continue;
          }
          break;
        }

        try {
          const data = JSON.parse(jsonStr) as AggregateFileResponse;
          yield data;
        } catch (error) {
          console.error(error);
          throw new Error(`Invalid JSON received: ${jsonStr}`);
        }
      }
    }

    if (buffer.trim()) {
      try {
        const data = JSON.parse(buffer.trim()) as AggregateFileResponse;
        yield data;
      } catch (error) {
        console.error(error);
        throw new Error(`Invalid final JSON: ${buffer}`);
      }
    }
  } finally {
    reader.releaseLock();
  }
}

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
        date: new Date(),
        isSuccess: true,
        filename: file.name,
        stats: lastInfo,
      });
    } catch (err) {
      console.warn(err);
      setState("error");
      push({
        date: new Date(),
        isSuccess: false,
        filename: file.name,
      });
    }
  };

  return [stats, action] as const;
};
