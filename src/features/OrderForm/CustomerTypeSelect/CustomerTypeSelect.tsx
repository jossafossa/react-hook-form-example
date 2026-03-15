import { Field, Select } from "@/components";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { ErrorMessage } from "@hookform/error-message";
import { useTranslation } from "react-i18next";
import { useId } from "react";

export const CustomerTypeSelect = () => {
  const { t } = useTranslation("order_form");
  const id = useId();

  const { register } = useOrderForm();

  const { errors } = useOrderFormState();

  const options = [
    { value: "business", label: t("options.customerType.business") },
    { value: "individual", label: t("options.customerType.individual") },
  ];

  return (
    <Field id={id} required>
      <Field.Label>{t("labels.customerType")}</Field.Label>
      <Select id={id} {...register("customerType")} options={options} />

      <ErrorMessage errors={errors} name="customerType" as={<Field.Error />} />
    </Field>
  );
};
