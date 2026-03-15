import { type FieldPath } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Field } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import type { OrderData } from "../schema";

const PRODUCTS = [
  { id: "cucumber", name: "Cucumber" },
  { id: "tomato", name: "Tomato" },
  { id: "lettuce", name: "Lettuce" },
];

type ProductSelectProps = {
  name: FieldPath<OrderData>;
  label?: string;
  products?: Array<{ id: string; name: string }>;
};

export const ProductSelect = ({
  name,
  label = "Product",
}: ProductSelectProps) => {
  const { register } = useOrderForm();

  const { errors } = useOrderFormState();

  return (
    <Field>
      <Field.Label>{label}</Field.Label>

      <select {...register(name)}>
        <option value="">Selecteer een product</option>
        {PRODUCTS.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Field.Error>{message}</Field.Error>}
      />
    </Field>
  );
};
