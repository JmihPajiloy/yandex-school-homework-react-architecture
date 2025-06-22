import {AnalyticsIcon, GeneratorIcon, HistoryIcon, Logo} from "@/shared/icons";
import {LinkButton} from "@/components/LinkButton";

import styles from "./Header.module.css";
import type {JSX} from "react";
import {useHref} from "react-router";

type HeaderItem = {
  link: string;
  name: string;
  icon: () => JSX.Element;
}

const headerItems: HeaderItem[] = [
  {
    link: "/",
    name: "CSV Аналитик",
    icon: AnalyticsIcon
  },
  {
    link: "/generator",
    name: "CSV Генератор",
    icon: GeneratorIcon
  },
  {
    link: "/history",
    name: "История",
    icon: HistoryIcon
  },
]

export const Header = () => {
  const pathname = useHref("")
  return (
    <header className={styles.header}>
      <div>
        <Logo/>
      </div>
      {
        headerItems.map(({link, name, icon: Icon}, index) => (
          <LinkButton to={link} selected={pathname === link} key={`${link}-${index}`}>
            <Icon/>
            <span>{name}</span>
          </LinkButton>
        ))
      }
    </header>
  );
}