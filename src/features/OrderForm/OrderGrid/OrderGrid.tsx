import { useFieldArray } from "react-hook-form";
import { useOrderForm, useOrderFormState } from "../useOrderForm";
import { Button, Field, Grid, Stack, Heading } from "@/components";
import { ErrorMessage } from "@hookform/error-message";
import { ProductSelect } from "../ProductSelect";
import { useTranslation } from "react-i18next";
import { AmountField } from "../AmountField";

export const OrderGrid = () => {
  const { t } = useTranslation("order_form");
  const { control } = useOrderForm();
  const { fields, append, remove, move, insert } = useFieldArray({
    control,
    name: "orders",
  });

  const { errors } = useOrderFormState();

  return (
    <Stack direction="column" gap="0.5rem">
      <Heading>{t("labels.orders")}</Heading>

      {fields.length === 0 && <span>No orders</span>}

      {fields.map((field, index) => (
        <Grid key={field.id}>
          <Grid.Item medium={4}>
            <ProductSelect
              name={`orders.${index}.productId`}
              label={t("labels.product")}
            />
          </Grid.Item>

          <Grid.Item medium={4}>
            <AmountField
              name={`orders.${index}.amount`}
              label={t("labels.amount")}
            />
          </Grid.Item>
          <Grid.Item medium={4}>
            <Stack direction="row">
              <Button
                title={t("buttons.add_product")}
                onClick={() => insert(index + 1, { productId: "", amount: 0 })}
              >
                +
              </Button>
              <Button
                title={t("buttons.remove_product")}
                onClick={() => remove(index)}
              >
                -
              </Button>
              <Button
                title={t("buttons.move_product_up")}
                onClick={() =>
                  move(index, index === 0 ? fields.length - 1 : index - 1)
                }
              >
                ↑
              </Button>
              <Button
                title={t("buttons.move_product_down")}
                onClick={() =>
                  move(index, index === fields.length - 1 ? 0 : index + 1)
                }
              >
                ↓
              </Button>
            </Stack>
          </Grid.Item>
        </Grid>
      ))}
      <div>
        <Button onClick={() => append({ productId: "", amount: 0 })}>
          {t("buttons.add_product")}
        </Button>
      </div>

      <ErrorMessage
        errors={errors}
        name="orders"
        render={({ message }) => <Field.Error>{message}</Field.Error>}
      />
    </Stack>
  );
};
