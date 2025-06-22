import { useContext } from "react";

import {FileContext} from "@/components/Upload/FileContext.ts";

export const useUpload = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useUpload must only be used within Upload component!");
  }
  return context;
}