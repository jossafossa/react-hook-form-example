import type { LabelHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Field.module.scss";
import {
  FieldContext,
  useFieldContext,
  type FieldContextType,
} from "./FieldContext";

type FieldProps = FieldContextType;

const _Field = ({ children, ...props }: PropsWithChildren<FieldProps>) => {
  return (
    <FieldContext value={props}>
      <label className={styles.field}>{children}</label>
    </FieldContext>
  );
};

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, ...props }: PropsWithChildren<LabelProps>) => {
  const { required } = useFieldContext();
  return (
    <span className={styles.label} {...props}>
      {children} {required && <span className={styles.required}>*</span>}
    </span>
  );
};

const Error = ({ children }: PropsWithChildren) => {
  return <div className={styles.error}>{children}</div>;
};

export const Field = Object.assign(_Field, {
  Label,
  Error,
});
