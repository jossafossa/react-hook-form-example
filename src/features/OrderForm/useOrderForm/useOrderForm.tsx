import { useFormContext, useFormState, useWatch } from "react-hook-form";
import type { OrderData } from "../schema";

export const useOrderForm = () => useFormContext<OrderData>();

export const useOrderFormState = () => useFormState<OrderData>();

export const useOrderFormWatch = () => useWatch<OrderData>();
