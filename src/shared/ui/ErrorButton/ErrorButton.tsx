import { CancelButton } from "@/shared/ui/CancelButton";
import styles from "./ErrorButton.module.css";

export type ErrorButtonProps = {
  title: string;
  subtitle: string;
  onCancel?: () => void;
};

export const ErrorButton = ({
  title,
  subtitle,
  onCancel,
}: ErrorButtonProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonsContainer}>
        <div className={styles.button}>{title}</div>
        <CancelButton onClick={() => onCancel?.()} />
      </div>
      <p className={styles.description}>{subtitle}</p>
    </div>
  );
};
