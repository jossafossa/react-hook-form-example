import { Field, Input } from "@/components";
import { useTranslation } from "react-i18next";
import {
  useOrderForm,
  useOrderFormState,
  useOrderFormWatch,
} from "../useOrderForm";
import { useId } from "react";

export const PhoneInput = () => {
  const { t } = useTranslation("order_form");
  const id = useId();

  const { register } = useOrderForm();
  const { errors } = useOrderFormState();
  const watch = useOrderFormWatch();

  const isRequired = watch.customerType === "business";

  return (
    <Field id={id} required={isRequired}>
      <Field.Label>{t("labels.phone")}</Field.Label>
      <Input id={id} {...register("phone")} />
      {errors.phone && <Field.Error>{errors.phone.message}</Field.Error>}
    </Field>
  );
};
