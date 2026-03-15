import type { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Select.module.scss";

type Option = Omit<
  OptionHTMLAttributes<HTMLOptionElement>,
  "value" | "children"
> & {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ options, required, ...props }: SelectProps) => {
  const { t } = useTranslation();

  return (
    <select className={styles.select} required={required} {...props}>
      {!required && <option value="">{t("options.empty")}</option>}
      {options.map((option) => (
        <option key={option.value} {...option}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
