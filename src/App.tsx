import i18next from "i18next";
import { OrderForm } from "./features";
import { initReactI18next } from "react-i18next/initReactI18next";
import HttpApi from "i18next-http-backend";
import { LanguageSwitch } from "./components";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    supportedLngs: ["en", "nl"],
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  return (
    <>
      <LanguageSwitch />
      <OrderForm />
    </>
  );
}

export default App;
