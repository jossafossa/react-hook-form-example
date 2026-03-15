import { type FieldPath } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Field, Select } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import type { OrderData } from "../schema";
import { useTranslation } from "react-i18next";
import { useId } from "react";

type ProductSelectProps = {
  name: FieldPath<OrderData>;
  label?: string;
  products?: Array<{ id: string; name: string }>;
};

export const ProductSelect = ({
  name,
  label = "Product",
}: ProductSelectProps) => {
  const { t } = useTranslation("order_form");
  const { register } = useOrderForm();
  const id = useId();

  const { errors } = useOrderFormState();

  const products = [
    { id: "cucumber", name: t("products.cucumber") },
    { id: "tomato", name: t("products.tomato") },
    { id: "lettuce", name: t("products.lettuce") },
  ];

  const options = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));

  return (
    <Field id={id} required>
      <Field.Label>{label}</Field.Label>

      <Select id={id} {...register(name)} options={options} />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Field.Error>{message}</Field.Error>}
      />
    </Field>
  );
};
