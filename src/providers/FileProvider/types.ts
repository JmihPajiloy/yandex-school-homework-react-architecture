import type { Dispatch, ReactNode, RefObject, SetStateAction } from "react";

export type FileState = "empty" | "has-file" | "pending" | "success" | "error";

export type FileContextType = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  state: FileState;
  setState: Dispatch<SetStateAction<FileState>>;
  inputRef: RefObject<HTMLInputElement | null>;
};

export type UploadProps = { children: ReactNode };
