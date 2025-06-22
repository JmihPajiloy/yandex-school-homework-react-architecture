import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import type { ReactNode } from "react";
import { CancelButton } from "@/shared/ui/CancelButton";

export type ModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

export const Modal = ({ children, open, onOpenChange }: ModalProps) => {
  if (!open) return null;
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
        <CancelButton
          onClick={(event) => {
            event.stopPropagation();
            onOpenChange?.(false);
          }}
        />
      </div>
    </div>,
    document.body,
  );
};
