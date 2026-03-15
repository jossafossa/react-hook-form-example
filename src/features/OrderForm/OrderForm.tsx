import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { orderSchema, useErrorMap, type OrderData } from "./schema";
import { TitleSelect } from "./TitleSelect";
import { NameInput } from "./NameInput";
import { Stack } from "@/components";
import { OrderGrid } from "./OrderGrid";
import { CustomerTypeSelect } from "./CustomerTypeSelect";
import { CompanyInput } from "./CompanyInput";

export const OrderForm = () => {
  const errorMap = useErrorMap();

  const methods = useForm({
    resolver: zodResolver(orderSchema, {
      error: errorMap,
    }),
    mode: "all",
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: OrderData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="1rem" direction="column">
          <Stack direction="row" gap="1rem">
            <TitleSelect />

            <NameInput />

            <CustomerTypeSelect />

            <CompanyInput />
          </Stack>

          <OrderGrid />

          <button type="submit">Submit</button>
        </Stack>
      </form>
    </FormProvider>
  );
};
