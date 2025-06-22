import { useFile } from "@/providers/FileProvider";
import { LoadButton } from "@/shared/ui/LoadButton";

const propsList = {
  empty: () => ({
    subtitle: "или перетащите сюда",
    title: "Загрузить файл",
  }),
  "has-file": (file: File | null) => ({
    title: file?.name ?? "",
    subtitle: "файл загружен!",
  }),
  error: (file: File | null) => ({
    title: file?.name ?? "",
    subtitle: "упс, не то...",
  }),
  pending: () => ({
    subtitle: "идёт парсинг файла",
  }),
  success: (file: File | null) => ({
    title: file?.name ?? "",
    subtitle: "готово!",
  }),
} as const;

export const LoadFileButton = () => {
  const { inputRef, file, state, setFile, setState } = useFile();
  const onClick = () => {
    inputRef.current?.click();
  };

  const onCancel = () => {
    setFile(null);
    setState("empty");
  };

  return (
    <LoadButton
      status={state}
      onCancel={onCancel}
      onClick={onClick}
      {...propsList[state](file)}
    />
  );
};
