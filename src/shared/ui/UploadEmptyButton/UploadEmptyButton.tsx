import styles from "./UploadEmptyButton.module.css";
import type { ComponentProps } from "react";

export type UploadEmptyButtonProps = ComponentProps<"button"> & {
  title: string;
  subtitle: string;
};

export const UploadEmptyButton = ({
  title,
  subtitle,
  ...props
}: UploadEmptyButtonProps) => {
  return (
    <div className={styles.mainContainer}>
      <button className={styles.button} {...props}>
        {title}
      </button>
      <p className={styles.description}>{subtitle}</p>
    </div>
  );
};
