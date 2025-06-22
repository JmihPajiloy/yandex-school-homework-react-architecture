import { useFile } from "@/providers/FileProvider";
import { useAggregateFile } from "@/hooks";
import { Button } from "@/shared/ui/Button";
import { StatsItem } from "@/shared/ui/StatsItem";
import styles from "./AggregateFileWidget.module.css";

export const AggregateFileWidget = () => {
  const { state, file, setState } = useFile();
  const [stats, aggregate] = useAggregateFile({ file, setState });
  if (!["pending", "success"].includes(state)) {
    return (
      <>
        <Button
          variant="green"
          disabled={state !== "has-file"}
          onClick={() => aggregate()}
        >
          Отправить
        </Button>
        <div className={styles.mainContainer}>Здесь появятся хайлайты</div>
      </>
    );
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <StatsItem
          title={stats?.total_spend_galactic ?? 0}
          subtitle="общие расходы в галактических кредитах"
        />
        <StatsItem
          title={stats?.rows_affected ?? 0}
          subtitle="количество обработанных записей"
        />
        <StatsItem
          title={stats?.less_spent_at ?? "-"}
          subtitle="день года с минимальными расходами"
        />
        <StatsItem
          title={stats?.big_spent_civ ?? "-"}
          subtitle="цивилизация с максимальными расходами"
        />
      </div>
      <div className={styles.container}>
        <StatsItem
          title={stats?.less_spent_civ ?? "-"}
          subtitle="цивилизация с минимальными расходами"
        />
        <StatsItem
          title={stats?.big_spent_at ?? "-"}
          subtitle="день года с максимальными расходами"
        />
        <StatsItem
          title={stats?.big_spent_value ?? 0}
          subtitle="максимальная сумма расходов за день"
        />
        <StatsItem
          title={stats?.average_spend_galactic ?? "-"}
          subtitle="средние расходы в галактических кредитах"
        />
      </div>
    </div>
  );
};
