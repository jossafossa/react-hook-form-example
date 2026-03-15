import { useOrderFormState } from "../useOrderForm";
import { Button, Field, Grid, Stack } from "@/components";
import { ErrorMessage } from "@hookform/error-message";
import { ProductSelect } from "../ProductSelect";
import { useTranslation } from "react-i18next";
import { AmountField } from "../AmountField";
import { useProductContext } from "../OrderFormContext";

export const OrderGrid = () => {
  const { t } = useTranslation("order_form");
  const { productMethods } = useProductContext();

  const { fields: products, append, remove, move, insert } = productMethods;

  const { errors } = useOrderFormState();

  return (
    <>
      {products.length === 0 && <span>{t("empty.products")}</span>}

      {products.map((product, index) => (
        <Grid key={product.id}>
          <Grid.Item medium={4}>
            <ProductSelect
              name={`products.${index}.productId`}
              label={t("labels.product")}
            />
          </Grid.Item>

          <Grid.Item medium={4}>
            <AmountField
              name={`products.${index}.amount`}
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
                  move(index, index === 0 ? products.length - 1 : index - 1)
                }
              >
                ↑
              </Button>
              <Button
                title={t("buttons.move_product_down")}
                onClick={() =>
                  move(index, index === products.length - 1 ? 0 : index + 1)
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
        name="products"
        render={({ message }) => <Field.Error>{message}</Field.Error>}
      />
    </>
  );
};
