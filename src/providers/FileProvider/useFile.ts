import { useContext } from "react";

import { FileContext } from "./FileContext.ts";

export const useFile = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFile must only be used within FileProvider!");
  }
  return context;
};
