import { Field, Input } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";

export const NameInput = () => {
  const { register } = useOrderForm();
  const { errors } = useOrderFormState();

  return (
    <Field>
      <Field.Label>Naam</Field.Label>
      <Input {...register("name")} />
      {errors.name && <Field.Error>{errors.name.message}</Field.Error>}
    </Field>
  );
};
