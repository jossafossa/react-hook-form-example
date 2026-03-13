import type { PropsWithChildren } from "react";
import styles from "./Field.module.scss";

const _Field = ({ children }: PropsWithChildren) => {
  return <div className={styles.field}>{children}</div>;
};

const Label = ({ children }: PropsWithChildren) => {
  return <label>{children}</label>;
};

const Error = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const Field = Object.assign(_Field, {
  Label,
  Error,
});
