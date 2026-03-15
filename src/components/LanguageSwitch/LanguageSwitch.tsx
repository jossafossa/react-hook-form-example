import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "../Select";
import { Field } from "../Field";

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation("order_form");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const options = [
    { value: "en", label: t("languages.english") },
    { value: "nl", label: t("languages.dutch") },
  ];

  return (
    <Field>
      <Field.Label>{t("labels.language")}</Field.Label>
      <Select
        value={i18n.language}
        required
        onChange={handleChange}
        options={options}
      />
    </Field>
  );
};
