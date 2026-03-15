import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = (props: ButtonProps) => {
  return <button className={styles.button} type="button" {...props} />;
};
