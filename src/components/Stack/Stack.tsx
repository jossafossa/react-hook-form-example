import type { PropsWithChildren } from "react";
import styles from "./Stack.module.scss";
import classNames from "classnames";

type StackProps = PropsWithChildren<{
  direction?: "row" | "column";
  gap?: string;
}>;

export const Stack = ({
  children,
  direction = "column",
  gap = "1rem",
}: StackProps) => {
  return (
    <div
      className={classNames(styles.stack, styles[direction])}
      style={{
        gap,
      }}
    >
      {children}
    </div>
  );
};
