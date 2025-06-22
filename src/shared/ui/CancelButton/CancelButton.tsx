import { CrossIcon } from "@/shared/icons";
import styles from "./CancelButton.module.css";
import type { ComponentProps } from "react";
import cn from "classnames";

export const CancelButton = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button className={cn(styles.cancelButton, className)} {...props}>
      <CrossIcon/>
    </button>
  )
}