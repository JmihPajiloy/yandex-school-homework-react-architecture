import { Header } from "@/components/Header";
import styles from "./GeneratorPage.module.css";
import { Button } from "@/shared/ui/Button";
import { useGenerateReport } from "@/hooks/useGenerateReport.ts";
import { LoadButton } from "@/shared/ui/LoadButton";

const propList = {
  pending: {
    subtitle: "идёт процесс генерации",
  },
  success: {
    title: "Done!",
    subtitle: "файл сгенерирован!",
  },
  error: {
    title: "Ошибка",
    subtitle: "упс, не то...",
  },
  empty: {},
} as const;

export const GeneratorPage = () => {
  const [status, download, cancel] = useGenerateReport();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Сгенерируйте готовый csv-файл нажатием одной кнопки
        </p>
        {status === "empty" && (
          <Button variant="green" onClick={() => download()}>
            Начать генерацию
          </Button>
        )}
        {status !== "empty" && (
          <LoadButton status={status} onCancel={cancel} {...propList[status]} />
        )}
      </div>
    </>
  );
};
