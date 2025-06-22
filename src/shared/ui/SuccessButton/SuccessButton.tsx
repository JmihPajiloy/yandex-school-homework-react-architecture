import { CancelButton } from "@/shared/ui/CancelButton";
import styles from "./SuccessButton.module.css";

export type SuccessButtonProps = {
  title: string;
  subtitle: string;
  onCancel?: () => void;
};

export const SuccessButton = ({
  title,
  subtitle,
  onCancel,
}: SuccessButtonProps) => {
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
