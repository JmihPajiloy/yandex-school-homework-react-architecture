import { Header } from "@/components/Header";
import styles from "./GeneratorPage.module.css";
import { Button } from "@/shared/ui/Button";
import { LoadingButton } from "@/shared/ui/LoadingButton";
import { SuccessButton } from "@/shared/ui/SuccessButton";
import { ErrorButton } from "@/shared/ui/ErrorButton";
import { useGenerateReport } from "@/hooks/useGenerateReport.ts";

export const GeneratorPage = () => {
  const [download, cancel] = useGenerateReport();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Сгенерируйте готовый csv-файл нажатием одной кнопки
        </p>
        {state === "empty" && (
          <Button variant="green" onClick={() => download()}>
            Начать генерацию
          </Button>
        )}
        {state === "pending" && (
          <LoadingButton subtitle="идёт процесс генерации" />
        )}
        {state === "success" && (
          <SuccessButton
            title="Done!"
            subtitle="файл сгенерирован!"
            onCancel={cancel}
          />
        )}
        {state === "error" && (
          <ErrorButton
            title="Ошибка"
            subtitle="упс, не то..."
            onCancel={cancel}
          />
        )}
      </div>
    </>
  );
};
