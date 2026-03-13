import { Field } from "@/components";
import { useOrderForm } from "../useOrderForm";

export const TitleSelect = () => {
  const {
    register,
    formState: { errors },
  } = useOrderForm();

  return (
    <Field>
      <Field.Label>Titel</Field.Label>
      <select {...register("title")}>
        <option value="Dhr.">Dhr.</option>
        <option value="Mevr.">Mevr.</option>
      </select>
      {errors.title && <Field.Error>{errors.title.message}</Field.Error>}
    </Field>
  );
};
