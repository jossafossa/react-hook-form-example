import { Field } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { ErrorMessage } from "@hookform/error-message";

export const CustomerTypeSelect = () => {
  const { register } = useOrderForm();

  const { errors } = useOrderFormState();

  return (
    <Field>
      <Field.Label>Customer type</Field.Label>
      <select {...register("customerType")}>
        <option value="business">Business</option>
        <option value="individual">Individual</option>
      </select>

      <ErrorMessage errors={errors} name="customerType" as={<Field.Error />} />
    </Field>
  );
};
