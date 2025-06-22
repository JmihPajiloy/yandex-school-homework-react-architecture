import type { ComponentProps } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

const buttonVariants = {
  green: styles.green,
  yellow: styles.yellow,
  black: styles.black,
} as const;

export type ButtonProps = ComponentProps<"button"> & {
  variant: keyof typeof buttonVariants;
}

export const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants[variant], styles.default, className)} {...props}>
      {children}
    </button>
  );
};
