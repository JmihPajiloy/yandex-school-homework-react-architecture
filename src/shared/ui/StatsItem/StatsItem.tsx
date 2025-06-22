import styles from "./StatsItem.module.css";

export type StatsItemProps = {
  title?: string | number;
  subtitle: string;
};

export const StatsItem = ({ title, subtitle }: StatsItemProps) => {
  return (
    <div className={styles.container}>
      <div>{typeof title === "number" ? title.toFixed() : title}</div>
      <p>{subtitle}</p>
    </div>
  );
};
