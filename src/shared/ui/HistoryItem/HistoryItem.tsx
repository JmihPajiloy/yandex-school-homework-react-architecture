import { DocumentIcon, HappyEmojiIcon, SadEmojiIcon } from "@/shared/icons";
import styles from "./HistoryItem.module.css";
import type { ComponentProps } from "react";

export type HistoryItemProps = ComponentProps<"button"> & {
  filename: string;
  date: Date;
  isSuccess: boolean;
};

export const HistoryItem = ({
  filename,
  date,
  isSuccess,
  ...props
}: HistoryItemProps) => {
  return (
    <button className={styles.container} {...props}>
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
    </button>
  );
};
