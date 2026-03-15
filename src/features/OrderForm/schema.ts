import { useTranslation } from "react-i18next";
import z from "zod";

const listFormatter = new Intl.ListFormat("nl", {
  style: "long",
  type: "disjunction",
});

export const useErrorMap = (): z.ZodErrorMap => {
  const { t } = useTranslation("order_form");

  return (issue) => {
    if (issue.message) return issue.message;

    if (issue.code === "invalid_value") {
      return t("errors.invalidValue", {
        value: listFormatter.format(issue.values.map(String)),
      });
    }

    if (issue.code === "too_small") {
      if (issue.origin === "array") {
        return t("errors.minItems", { value: issue.minimum });
      }

      if (issue.origin === "number") {
        return t("errors.min", { value: issue.minimum });
      }

      if (issue.origin === "string") {
        return t("errors.minLength", { value: issue.minimum });
      }
    }

    if (issue.code === "too_big") {
      if (issue.origin === "number") {
        return t("errors.max", { value: issue.maximum });
      }

      if (issue.origin === "string") {
        return t("errors.maxLength", { value: issue.maximum });
      }
    }

    if (issue.code === "invalid_union") {
      return t("errors.required");
    }

    if (issue.code === "invalid_type") {
      return t("errors.invalidType", {
        expected: issue.expected,
        received: issue.received,
      });
    }

    if (issue.code === "invalid_format") {
      return t("errors.invalidFormat");
    }

    return t("errors.unknown");
  };
};

const phoneValidation = z
  .string()
  .min(1)
  .regex(/^\+?[0-9\s-]{6,15}$/);

export const baseSchema = z.object({
  name: z.string().min(1),
  title: z.enum(["mr", "mrs"]),
  products: z
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
    phone: phoneValidation.or(z.string().length(0)),
  }),
  z.object({
    customerType: z.literal("business"),
    company: z.string().min(1),
    phone: phoneValidation,
  }),
]);

export const orderSchema = baseSchema.and(customerSchema);

export type OrderData = z.infer<typeof orderSchema>;
