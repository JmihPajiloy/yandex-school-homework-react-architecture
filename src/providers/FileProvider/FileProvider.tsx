import { useRef, useState } from "react";
import type { FileState, UploadProps } from "./types";
import { FileContext } from "./FileContext";

export const FileProvider = ({ children }: UploadProps) => {
  const [state, setState] = useState<FileState>("empty");
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <FileContext.Provider
      value={{
        state,
        setState,
        file,
        setFile,
        inputRef,
      }}
    >
      {children}
      <input
        style={{
          display: "none",
        }}
        type="file"
        accept="text/csv"
        ref={inputRef}
        onChange={(event) => {
          const files = event.target.files;
          if (!files || !files.length) {
            setState("empty");
            setFile(null);
            return;
          }
          const [file] = files;
          setFile(file);
          setState("has-file");
        }}
      />
    </FileContext.Provider>
  );
};
