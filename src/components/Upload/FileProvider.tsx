import {useState} from "react";
import type {UploadProps, UploadState} from "./types.ts";
import {FileContext} from "@/components/Upload/FileContext.ts";

export const FileProvider = ({children}: UploadProps) => {
  const [state, setState] = useState<UploadState>("empty");
  const [file, setFile] = useState<File | null>(null);
  return (
    <FileContext.Provider
      value={{
        state,
        setState,
        file,
        setFile
      }}
    >
      {children}
    </FileContext.Provider>
  );
}