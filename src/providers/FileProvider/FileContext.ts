import { createContext } from "react";
import type { FileContextType } from "./types.ts";

export const FileContext = createContext<FileContextType | null>(null);
