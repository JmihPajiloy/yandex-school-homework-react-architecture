import { useState } from "react";
import type { UploadState } from "@/components/Upload/types.ts";
import { generateReport } from "@/entities/api";

export const useGenerateReport = () => {
  const [state, setState] = useState<UploadState>("empty");

  const download = async () => {
    setState("pending");
    try {
      const url = await generateReport();

      const link = document.createElement("a");
      link.href = url;
      link.download = "report.csv";
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        setState("success");
        URL.revokeObjectURL(url);
      }, 100);
    } catch (err) {
      console.warn(err);
      setState("error");
    }
  };

  const cancel = () => {
    setState("empty");
  };

  return [state, download, cancel] as const;
};
