import { Header } from "@/components/Header";
import styles from "./AnalyticsPage.module.css";
import { DragArea } from "@/components/DragArea/DragArea.tsx";
import { FileProvider } from "@/components/Upload";
import { LoadFileButton } from "@/components/LoadFileButton";
import { AggregateFileWidget } from "@/components/AggregateFileButton";

export const AnalyticsPage = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <p className={styles.paragraph}>
          Загрузите <span>csv</span> файл и получите{" "}
          <span>полную информацию</span> о нём за сверхнизкое время
        </p>
        <FileProvider>
          <DragArea>
            <LoadFileButton />
          </DragArea>
          <AggregateFileWidget />
        </FileProvider>
      </main>
    </>
  );
};
