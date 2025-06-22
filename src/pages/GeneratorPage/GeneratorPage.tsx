import { Header } from "@/components/Header";
import styles from "./GeneratorPage.module.css";
import { Button } from "@/shared/ui/Button";
import { useState } from "react";
import type { UploadState } from "@/components/Upload/types.ts";
import { LoadingButton } from "@/shared/ui/LoadingButton";
import { SuccessButton } from "@/shared/ui/SuccessButton";
import { ErrorButton } from "@/shared/ui/ErrorButton";

export const GeneratorPage = () => {
  const [state, setState] = useState<UploadState>("empty");

  const download = async () => {
    setState("pending");
    try {
      const response = await fetch(`http://localhost:3000/report?size=0.2`);

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.text();
      const blob = new Blob([data], { type: "text/csv" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "report.csv";
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        setState("success");
        URL.revokeObjectURL(url);
      }, 100);
    } catch (err) {
      console.warn(err);
      setState("error");
    }
  };

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
          <SuccessButton title="Done!" subtitle="файл сгенерирован!" />
        )}
        {state === "error" && (
          <ErrorButton title="Ошибка" subtitle="упс, не то..." />
        )}
      </div>
    </>
  );
};
