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

export async function* aggregateFile(file: File, rows = 10000) {
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
