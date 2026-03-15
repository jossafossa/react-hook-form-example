import { Field, Input } from "@/components";
import {
  useOrderForm,
  useOrderFormState,
  useOrderFormWatch,
} from "../useOrderForm";
import { ErrorMessage } from "@hookform/error-message";
import { useTranslation } from "react-i18next";
import { useId } from "react";

export const CompanyInput = () => {
  const { t } = useTranslation("order_form");
  const id = useId();
  const { register } = useOrderForm();
  const { errors } = useOrderFormState();
  const watch = useOrderFormWatch();

  const isVisible = watch.customerType === "business";

  if (!isVisible) {
    return null;
  }

  return (
    <Field id={id} required={true}>
      <Field.Label>{t("labels.company")}</Field.Label>
      <Input id={id} {...register("company")} />
      <ErrorMessage errors={errors} name="company" as={<Field.Error />} />
    </Field>
  );
};
