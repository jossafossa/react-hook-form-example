import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "../Select";

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation("order_form");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const options = [{ value: "en", label: t("languages.english") }];

  return (
    <Select
      value={i18n.language}
      required
      onChange={handleChange}
      options={options}
    />
  );
};
