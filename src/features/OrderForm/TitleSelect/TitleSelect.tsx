import { Field } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";

export const TitleSelect = () => {
  const { register } = useOrderForm();

  const { errors } = useOrderFormState();

  return (
    <Field>
      <Field.Label>Titel</Field.Label>
      <select {...register("title")}>
        <option value="Dhr.">Dhr.</option>
        <option value="Mevr.">Mevr.</option>
        <option value="Other">Other</option>
      </select>
      {errors.title && <Field.Error>{errors.title.message}</Field.Error>}
    </Field>
  );
};
