import { TrashIcon } from "@/shared/icons";
import styles from "./DeleteButton.module.css";
import type { ComponentProps } from "react";
import cn from "classnames";

export const DeleteButton = ({
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      <TrashIcon />
    </button>
  );
};
