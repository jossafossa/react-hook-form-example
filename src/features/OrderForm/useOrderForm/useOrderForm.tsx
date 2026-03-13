import { useFormContext } from "react-hook-form";
import type z from "zod";
import type { schema } from "../schema";

export const useOrderForm = () => useFormContext<z.infer<typeof schema>>();
