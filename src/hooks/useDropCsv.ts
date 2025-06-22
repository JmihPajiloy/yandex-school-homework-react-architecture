import type { FileContextType } from "@/components/Upload/types.ts";
import * as React from "react";
import { useState } from "react";

const isCSV = (file: File): boolean => {
  const validExtensions = [".csv", ".txt"];
  const validMimeTypes = [
    "text/csv",
    "text/plain",
    "application/vnd.ms-excel",
    "application/csv",
    "text/x-csv",
    "application/x-csv",
    "text/comma-separated-values",
    "text/x-comma-separated-values",
  ];

  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  return (
    validExtensions.includes(extension) &&
    (validMimeTypes.includes(file.type) || !file.type)
  );
};

export type UseDropCsvProps = Pick<
  FileContextType,
  "setState" | "setFile" | "file"
>;
export const useDropCsv = ({
  setFile,
  setState,
  file: externalFile,
}: UseDropCsvProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length === 0 || externalFile) return;

    const [file] = files;

    setState(isCSV(file) ? "has-file" : "error");
    setFile(file);
  };

  return [
    isDragging,
    { onDragEnter, onDragOver, onDragLeave, onDrop },
  ] as const;
};
