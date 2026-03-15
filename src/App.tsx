import i18next from "i18next";
import { OrderForm } from "./features";
import { initReactI18next } from "react-i18next/initReactI18next";
import HttpApi from "i18next-http-backend";
import { Container, LanguageSwitch, Stack } from "@/components";
import styles from "./App.module.scss";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    supportedLngs: ["en", "nl"],
    lng: "en",
    fallbackLng: "en",
  });

function App() {
  return (
    <div className={styles.app}>
      <Stack gap="1rem" direction="column">
        <Container>
          <LanguageSwitch />
        </Container>
        <OrderForm />
      </Stack>
    </div>
  );
}

export default App;
