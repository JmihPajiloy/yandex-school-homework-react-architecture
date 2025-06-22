import { DocumentIcon, HappyEmojiIcon, SadEmojiIcon } from "@/shared/icons";
import styles from "./HistoryItem.module.css";

export type HistoryItemProps = {
  filename: string;
  date: Date;
  isSuccess: boolean;
};

export const HistoryItem = ({
  filename,
  date,
  isSuccess,
}: HistoryItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <DocumentIcon />
        <span>{filename}</span>
      </div>
      <div className={styles.item}>
        {date.toLocaleDateString("Ru-ru", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </div>
      <div className={styles.item} aria-disabled={!isSuccess}>
        <span>Обработан успешно</span>
        <HappyEmojiIcon />
      </div>
      <div className={styles.item} aria-disabled={isSuccess}>
        <span>Не удалось обработать</span>
        <SadEmojiIcon />
      </div>
    </div>
  );
};
