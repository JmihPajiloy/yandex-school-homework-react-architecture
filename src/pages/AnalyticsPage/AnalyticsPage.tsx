import {Header} from "@/components/Header";
import styles from "./AnalyticsPage.module.css";

export const AnalyticsPage = () => {
  return (
    <>
      <Header/>
      <div>
        <p className={styles.paragraph}>Загрузите <span>csv</span> файл и получите <span>полную информацию</span> о нём за сверхнизкое время</p>
        <input type="file" accept="text/csv" />
      </div>

    </>

  );
};