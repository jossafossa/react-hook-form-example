import { Field, Select } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { useTranslation } from "react-i18next";
import { useId } from "react";

export const TitleSelect = () => {
  const { t } = useTranslation("order_form");
  const id = useId();

  const { register } = useOrderForm();
  const { errors } = useOrderFormState();

  const options = [
    { value: "mr", label: t("options.title.mr") },
    { value: "mrs", label: t("options.title.mrs") },
  ];

  return (
    <Field id={id} required>
      <Field.Label>{t("labels.title")}</Field.Label>
      <Select id={id} {...register("title")} options={options} />
      {errors.title && <Field.Error>{errors.title.message}</Field.Error>}
    </Field>
  );
};
