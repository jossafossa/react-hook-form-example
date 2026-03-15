import { Field, Input } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { useTranslation } from "react-i18next";
import { useId } from "react";

export const NameInput = () => {
  const { t } = useTranslation("order_form");
  const id = useId();

  const { register } = useOrderForm();
  const { errors } = useOrderFormState();

  return (
    <Field id={id} required>
      <Field.Label>{t("labels.name")}</Field.Label>
      <Input id={id} {...register("name")} />
      {errors.name && <Field.Error>{errors.name.message}</Field.Error>}
    </Field>
  );
};
