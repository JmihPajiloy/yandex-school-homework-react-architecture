"use client";

import { Link } from "react-router";
import type { ComponentProps } from "react";
import cn from "classnames";
import styles from "./LinkButton.module.css"


export type LinkButtonProps = ComponentProps<typeof Link> & {
  selected?: boolean;
}

export const LinkButton = ({ to, selected, className, children, ...props }: LinkButtonProps) => {
  return (
    <Link to={to} className={cn(styles.link_button, selected && styles.link_button_selected, className)} {...props}>
      {children}
    </Link>
  );
};