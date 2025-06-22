import { CancelButton } from "@/shared/ui/CancelButton";
import styles from "./SuccessButton.module.css";
import type { UploadState } from "@/components/Upload/types.ts";
import type { ComponentProps } from "react";

export type SuccessButtonProps = ComponentProps<"button"> & {
  status: UploadState;
  title: string;
  subtitle: string;
  onCancel?: () => void;
};

const description = {
  "empty":
} as const;

export const LoadButton = ({
  title,
  status,
  subtitle,
  onCancel,
  ...props,
}: SuccessButtonProps) => {
  if (status === "pending") {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.button}>
          <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"
               className={styles.spinner}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M30.5002 9.99994C25.1959 9.99994 20.1088 12.1071 16.3581 15.8578C12.6074 19.6085 10.5002 24.6956 10.5002 29.9999C10.5002 35.3043 12.6074 40.3913 16.3581 44.1421C20.1088 47.8928 25.1959 49.9999 30.5002 49.9999C35.8046 49.9999 40.8917 47.8928 44.6424 44.1421C48.3931 40.3913 50.5002 35.3043 50.5002 29.9999C50.5002 24.6956 48.3931 19.6085 44.6424 15.8578C40.8917 12.1071 35.8046 9.99994 30.5002 9.99994ZM5.50024 29.9999C5.50024 16.1924 16.6927 4.99994 30.5002 4.99994C44.3077 4.99994 55.5002 16.1924 55.5002 29.9999C55.5002 43.8074 44.3077 54.9999 30.5002 54.9999C16.6927 54.9999 5.50024 43.8074 5.50024 29.9999Z"
                  fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M30.4999 10C25.3436 9.98966 20.3844 11.9812 16.6674 15.555C16.4304 15.7822 16.1509 15.9605 15.845 16.0797C15.5391 16.1989 15.2127 16.2566 14.8844 16.2497C14.5562 16.2427 14.2325 16.1711 13.9319 16.0391C13.6313 15.907 13.3596 15.7171 13.1324 15.48C12.9053 15.243 12.727 14.9635 12.6078 14.6576C12.4886 14.3517 12.4309 14.0253 12.4378 13.697C12.4448 13.3687 12.5163 13.0451 12.6484 12.7445C12.7804 12.4439 12.9704 12.1722 13.2074 11.945C17.8554 7.47906 24.0541 4.98953 30.4999 5.00003C31.163 5.00003 31.7989 5.26343 32.2677 5.73227C32.7365 6.20111 32.9999 6.83699 32.9999 7.50003C32.9999 8.16307 32.7365 8.79896 32.2677 9.2678C31.7989 9.73664 31.163 10 30.4999 10Z"
                  fill="#2AE881"/>
          </svg>
        </div>
        <p className={styles.description}>{subtitle}</p>
      </div>
    )
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonsContainer}>
        <div className={styles.button}>{title}</div>
        <CancelButton onClick={() => onCancel?.()} />
      </div>
      <p className={styles.description}>{subtitle}</p>
    </div>
  );
};
