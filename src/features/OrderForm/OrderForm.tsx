import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { orderSchema, useErrorMap, type OrderData } from "./schema";
import { TitleSelect } from "./TitleSelect";
import { NameInput } from "./NameInput";
import { Grid, Container, Button } from "@/components";
import { OrderGrid } from "./OrderGrid";
import { CustomerTypeSelect } from "./CustomerTypeSelect";
import { CompanyInput } from "./CompanyInput";
import { PhoneInput } from "./PhoneInput";
import { useTranslation } from "react-i18next";

export const OrderForm = () => {
  const { t } = useTranslation("order_form");
  const errorMap = useErrorMap();

  const methods = useForm({
    resolver: zodResolver(orderSchema, {
      error: errorMap,
    }),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: OrderData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Item medium={6}>
              <TitleSelect />
            </Grid.Item>

            <Grid.Item medium={6}>
              <NameInput />
            </Grid.Item>

            <Grid.Item medium={6}>
              <CustomerTypeSelect />
            </Grid.Item>

            <Grid.Item medium={6}>
              <PhoneInput />
            </Grid.Item>

            <Grid.Item medium={6}>
              <CompanyInput />
            </Grid.Item>

            <Grid.Item>
              <OrderGrid />
            </Grid.Item>

            <Grid.Item>
              <Button type="submit">{t("buttons.submit")}</Button>
            </Grid.Item>
          </Grid>
        </form>
      </Container>
    </FormProvider>
  );
};
