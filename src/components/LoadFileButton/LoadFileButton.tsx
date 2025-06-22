import { UploadEmptyButton } from "@/shared/ui/UploadEmptyButton";
import { useUpload } from "@/components/Upload/useUpload.ts";
import { UploadWithFileButton } from "@/shared/ui/UploadWithFileButton";
import { ErrorButton } from "@/shared/ui/ErrorButton";
import { LoadingButton } from "@/shared/ui/LoadingButton";
import { SuccessButton } from "@/shared/ui/SuccessButton";

export const LoadFileButton = () => {
  const { inputRef, file, state, setFile, setState } = useUpload();
  const onClick = () => {
    inputRef.current?.click();
  };

  const onCancel = () => {
    setFile(null);
    setState("empty");
  };

  switch (state) {
    case "empty":
      return (
        <UploadEmptyButton
          subtitle="или перетащите сюда"
          title="Загрузить файл"
          onClick={onClick}
        />
      );
    case "has-file":
      return (
        <UploadWithFileButton
          title={file?.name ?? ""}
          subtitle="файл загружен!"
          onCancel={onCancel}
        />
      );
    case "error":
      return (
        <ErrorButton
          title={file?.name ?? ""}
          subtitle="упс, не то..."
          onCancel={onCancel}
        />
      );
    case "pending":
      return <LoadingButton subtitle="идёт парсинг файла" />;
    case "success":
      return (
        <SuccessButton
          title={file?.name ?? ""}
          subtitle="готово!"
          onCancel={onCancel}
        />
      );
  }
};
