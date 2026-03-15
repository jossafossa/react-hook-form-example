import { useFieldArray } from "react-hook-form";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { Field, Stack } from "@/components";
import { ErrorMessage } from "@hookform/error-message";
import { ProductSelect } from "../ProductSelect";

export const OrderGrid = () => {
  const { control, register } = useOrderForm();
  const { fields, append, remove, move, insert } = useFieldArray({
    control,
    name: "orders",
  });

  const { errors } = useOrderFormState();

  return (
    <Stack direction="column" gap="0.5rem">
      {fields.map((field, index) => (
        <Stack key={field.id} direction="row" gap="0.5rem">
          <ProductSelect name={`orders.${index}.productId`} label="Product" />

          <Field>
            <Field.Label>Amount</Field.Label>
            <input
              {...register(`orders.${index}.amount`, { valueAsNumber: true })}
            />

            <ErrorMessage
              errors={errors}
              name={`orders.${index}.amount`}
              render={({ message }) => <Field.Error>{message}</Field.Error>}
            />
          </Field>
          <button
            type="button"
            onClick={() => insert(index + 1, { productId: "", amount: 0 })}
          >
            +
          </button>
          <button type="button" onClick={() => remove(index)}>
            -
          </button>
          <button
            type="button"
            onClick={() =>
              move(index, index === 0 ? fields.length - 1 : index - 1)
            }
          >
            ↑
          </button>
          <button
            type="button"
            onClick={() =>
              move(index, index === fields.length - 1 ? 0 : index + 1)
            }
          >
            ↓
          </button>
        </Stack>
      ))}
      <button
        type="button"
        onClick={() => append({ productId: "", amount: 0 })}
      >
        +
      </button>

      <ErrorMessage
        errors={errors}
        name="orders"
        render={({ message }) => <Field.Error>{message}</Field.Error>}
      />
    </Stack>
  );
};
