import { CancelButton } from "@/shared/ui/CancelButton";
import styles from "./UploadWithFile.module.css";

export type UploadWithFileButtonProps = {
  title: string;
  subtitle: string;
  onCancel?: () => void;
};

export const UploadWithFileButton = ({
  title,
  subtitle,
  onCancel,
}: UploadWithFileButtonProps) => {
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
