import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { orderSchema, useErrorMap, type OrderData } from "./schema";
import { TitleSelect } from "./TitleSelect";
import { NameInput } from "./NameInput";
import { Grid, Container, Button, Stack, Heading } from "@/components";
import { OrderGrid } from "./OrderGrid";
import { CustomerTypeSelect } from "./CustomerTypeSelect";
import { CompanyInput } from "./CompanyInput";
import { PhoneInput } from "./PhoneInput";
import { useTranslation } from "react-i18next";
import { RecipeSelect } from "./RecipeSelect";
import { UserSelect } from "./UserSelect";
import { OrderFormProvider } from "./OrderFormContext";
import { useState } from "react";

export const OrderForm = () => {
  const { t } = useTranslation("order_form");
  const [submitResult, setSubmitResult] = useState<OrderData>();
  const errorMap = useErrorMap();

  const methods = useForm({
    resolver: zodResolver(orderSchema, {
      error: errorMap,
    }),
    defaultValues: {
      products: [],
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: OrderData) => {
    console.log(data);
    setSubmitResult(data);
  };

  const productMethods = useFieldArray({
    control: methods.control,
    name: "products",
  });

  return (
    <OrderFormProvider methods={methods} productMethods={productMethods}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="2rem">
            <Heading level={1}>{t("labels.title")}</Heading>

            <Stack>
              <Heading>{t("labels.customer_info")}</Heading>

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
              </Grid>
            </Stack>

            <Stack>
              <Heading>{t("labels.order_details")}</Heading>
              <OrderGrid />
            </Stack>

            <Stack>
              <Heading>{t("labels.bulk_actions")}</Heading>
              <UserSelect />
              <RecipeSelect />
            </Stack>

            <div>
              <Button type="submit">{t("buttons.submit")}</Button>
            </div>

            {submitResult && <pre>{JSON.stringify(submitResult, null, 2)}</pre>}
          </Stack>
        </form>
      </Container>
    </OrderFormProvider>
  );
};
