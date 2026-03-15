import type { JSX, PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({
  level = 2,
  children,
}: PropsWithChildren<HeadingProps>) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={styles.heading}>{children}</Tag>;
};
