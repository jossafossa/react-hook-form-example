import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const languageNames: Record<string, string> = {
  nl: "Nederlands",
  en: "English",
};

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleChange}>
      {Object.entries(languageNames).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};
