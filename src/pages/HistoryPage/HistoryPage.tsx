import { Header } from "@/components/Header";
import { HistoryList } from "@/components/HistoryList";
import { GenerateMoreButton } from "@/components/GenerateMoreButton";
import { HistoryClearButton } from "@/components/HistoryClearButton";

import styles from "./HistoryPage.module.css";

export const HistoryPage = () => {
  return (
    <>
      <Header />
      <HistoryList />
      <div className={styles.buttonContainer}>
        <GenerateMoreButton />
        <HistoryClearButton />
      </div>
    </>
  );
};
