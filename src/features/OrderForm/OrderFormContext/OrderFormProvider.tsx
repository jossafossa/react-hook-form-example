import {
  FormProvider,
  type UseFieldArrayReturn,
  type UseFormReturn,
} from "react-hook-form";
import type { OrderData } from "../schema";
import { ProductContext } from "./ProductContext";

type OrderFormProviderProps = {
  children: React.ReactNode;
  methods: UseFormReturn<OrderData>;
  productMethods: UseFieldArrayReturn<OrderData, "products", "id">;
};

export const OrderFormProvider = ({
  children,
  methods,
  productMethods,
}: OrderFormProviderProps) => {
  return (
    <ProductContext value={{ productMethods }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </ProductContext>
  );
};
