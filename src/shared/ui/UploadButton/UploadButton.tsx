import type {ComponentProps} from "react";

export type UploadButtonEmptyProps = ComponentProps<"button"> & {
  title: string
  subtitle: string
}