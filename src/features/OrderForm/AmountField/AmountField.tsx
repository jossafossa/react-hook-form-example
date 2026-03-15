import { Field, Input } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { ErrorMessage } from "@hookform/error-message";
import type { FieldPath } from "react-hook-form";
import type { OrderData } from "../schema";
import { useId } from "react";

type AmountFieldProps = {
  name: FieldPath<OrderData>;
  label?: string;
};

export const AmountField = ({ name, label }: AmountFieldProps) => {
  const id = useId();
  const { register } = useOrderForm();
  const { errors } = useOrderFormState();
  return (
    <Field id={id} required>
      <Field.Label>{label}</Field.Label>
      <Input id={id} {...register(name, { valueAsNumber: true })} />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Field.Error>{message}</Field.Error>}
      />
    </Field>
  );
};
