import type { ReactNode } from "react";
import { useDropCsv } from "@/hooks";
import { useFile } from "@/providers/FileProvider";
import styles from "./DragArea.module.css";

export const DragArea = ({ children }: { children: ReactNode }) => {
  const { setState, setFile, file, state } = useFile();
  const [isDragging, config] = useDropCsv({ setState, setFile, file });

  return (
    <div
      className={styles.area}
      data-dragging={isDragging}
      aria-invalid={state === "error"}
      {...config}
    >
      {children}
    </div>
  );
};
