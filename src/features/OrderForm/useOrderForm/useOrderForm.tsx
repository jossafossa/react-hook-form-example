import { useFormContext, useFormState } from "react-hook-form";
import type z from "zod";
import type { orderSchema } from "../schema";

export const useOrderForm = () => useFormContext<z.infer<typeof orderSchema>>();

export const useOrderFormState = () =>
  useFormState<z.infer<typeof orderSchema>>();
