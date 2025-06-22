import {type Dispatch, type ReactNode, type SetStateAction} from "react";

export type UploadState = "empty" | "has-file" | "pending" | "success" | "error";

export type FileContextType = {
  file: File | null
  setFile: Dispatch<SetStateAction<File | null>>
  state: UploadState
  setState: Dispatch<SetStateAction<UploadState>>
}

export type UploadProps = { children: ReactNode }