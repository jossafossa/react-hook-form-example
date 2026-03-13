import { Field, Input } from "@/components";
import { useOrderForm } from "../useOrderForm";

export const NameInput = () => {
  const {
    register,
    formState: { errors },
  } = useOrderForm();

  console.log(errors);

  return (
    <Field>
      <Field.Label>Naam</Field.Label>
      <Input {...register("name")} />
      {errors.name && <Field.Error>{errors.name.message}</Field.Error>}
    </Field>
  );
};
