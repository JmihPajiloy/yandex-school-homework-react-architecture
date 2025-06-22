import styles from "./ModalStatsList.module.css";
import type { AggregateFileResponse } from "@/entities/api";
import { StatsItem } from "@/shared/ui/StatsItem";

export const ModalStatsList = (stats: AggregateFileResponse) => {
  return (
    <div className={styles.list}>
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
  );
};
