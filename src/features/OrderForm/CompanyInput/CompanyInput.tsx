import { Field, Input } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { ErrorMessage } from "@hookform/error-message";

export const CompanyInput = () => {
  const { register } = useOrderForm();
  const { errors } = useOrderFormState();

  return (
    <Field>
      <Field.Label>Company</Field.Label>
      <Input {...register("company")} />
      <ErrorMessage errors={errors} name="company" as={<Field.Error />} />
    </Field>
  );
};
