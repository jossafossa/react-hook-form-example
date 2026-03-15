import { useTranslation } from "react-i18next";
import z from "zod";

const listFormatter = new Intl.ListFormat("nl", {
  style: "long",
  type: "disjunction",
});

// dutch messages
export const useErrorMap = () => {
  const { t } = useTranslation("order_form");

  return (issue: z.core.$ZodIssue) => {
    if (issue.code === "invalid_value") {
      return `Kies uit: ${listFormatter.format(issue.values.map(String))}`;
    }

    if (issue.code === "too_small" && issue.origin === "array") {
      return `Te weinig rijen, minimaal ${issue.minimum} nodig`;
    }

    if (issue.code === "too_small" && issue.origin === "string") {
      return t("errors.required");
    }

    if (issue.code === "too_small" && issue.origin === "number") {
      return `Waarde moet minimaal ${issue.minimum} zijn`;
    }

    return { message: issue.message };
  };
};

export const baseSchema = z.object({
  name: z.string().min(1),
  title: z.enum(["Dhr.", "Mevr."]),
  orders: z
    .array(
      z.object({
        productId: z.string().min(1),
        amount: z.number().min(1),
      }),
    )
    .min(1),
});

const customerSchema = z.discriminatedUnion("customerType", [
  z.object({
    customerType: z.literal("individual"),
  }),
  z.object({
    customerType: z.literal("business"),
    company: z.string().min(1),
  }),
]);

export const orderSchema = baseSchema.and(customerSchema);

export type OrderData = z.infer<typeof orderSchema>;
