import { createContext, useContext } from "react";
import { type UseFieldArrayReturn } from "react-hook-form";
import type { OrderData } from "../schema";

type ProductContextType = {
  productMethods: UseFieldArrayReturn<OrderData, "products", "id">;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductContext must be used within an OrderFormProvider",
    );
  }

  return context;
};
