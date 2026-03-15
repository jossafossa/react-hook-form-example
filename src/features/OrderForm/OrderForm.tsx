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

export const OrderForm = () => {
  const { t } = useTranslation("order_form");
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
  };

  const productMethods = useFieldArray({
    control: methods.control,
    name: "products",
  });

  return (
    <OrderFormProvider methods={methods} productMethods={productMethods}>
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
              <Stack>
                <Heading>Bulk actions</Heading>
                <RecipeSelect />
                <UserSelect />
              </Stack>
            </Grid.Item>

            <Grid.Item>
              <Button type="submit">{t("buttons.submit")}</Button>
            </Grid.Item>
          </Grid>
        </form>
      </Container>
    </OrderFormProvider>
  );
};
