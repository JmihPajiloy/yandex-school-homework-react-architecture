import type { UploadButtonProps } from "./types.ts";
import type { ComponentProps } from "react";

const captions = {
  empty: "или перетащите сюда",
  hasfile: "файл загружен!",
  pending: "идёт парсинг файла",
  success: "готово!",
  error: "упс, не то..."
} as const

type InputState = keyof typeof captions;

export type UploadButtonProps = ComponentProps<"input"> & {
  id: string
  state?: InputState
  onChange: (value: File | null) => void
}


export const FileUploadButton = ({id, value, state = "empty", onChange, ...props}: UploadButtonProps) => {
  const caption = captions[state];
  return (
    <div>
      <div>
        <label htmlFor={id}>
          {value || "Загрузить файл"}
        </label>
        <input
          onChange={event => onChange(event.target.files?.[0] ?? null)}
          type="file"
          accept="text/csv"
          {...props}
        />
        <button onClick={() => onChange(null)}>

        </button>
      </div>
      <span>{caption}</span>
    </div>
  );
};