import { FileProvider } from "@/providers/FileProvider";

import { Header } from "@/components/Header";
import { DragArea } from "@/components/DragArea/DragArea.tsx";
import { LoadFileButton } from "@/components/LoadFileButton";
import { AggregateFileWidget } from "@/components/AggregateFileWidget";

import styles from "./AnalyticsPage.module.css";

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
