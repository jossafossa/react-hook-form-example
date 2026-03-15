import { Button, Field, Select, Stack } from "@/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useProductContext } from "../OrderFormContext";

const recipes = [
  {
    id: "salad",
    name: "Salad",
    products: [
      { id: "cucumber", amount: 1 },
      { id: "tomato", amount: 2 },
      { id: "lettuce", amount: 1 },
    ],
  },
  {
    id: "soup",
    name: "Soup",
    products: [
      { id: "tomato", amount: 3 },
      { id: "lettuce", amount: 2 },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    products: [
      { id: "cucumber", amount: 1 },
      { id: "tomato", amount: 1 },
    ],
  },
];

export const RecipeSelect = () => {
  const [recipe, setRecipe] = useState<string | undefined>();
  const { t } = useTranslation("order_form");
  const { productMethods } = useProductContext();
  const { append } = productMethods;

  const options = recipes.map((recipe) => ({
    value: recipe.id,
    label: recipe.name,
  }));

  const handleAddRecipe = () => {
    if (!recipe) return;

    const selectedRecipe = recipes.find((r) => r.id === recipe);

    if (!selectedRecipe) return;

    selectedRecipe.products.forEach((product) => {
      append({ productId: product.id, amount: product.amount });
    });
  };

  return (
    <Field>
      <Field.Label>Recipe</Field.Label>
      <Stack direction="row" gap="0.5rem">
        <Select
          options={options}
          onChange={(event) => setRecipe(event.target.value)}
        />

        {recipe && (
          <Button onClick={handleAddRecipe}>
            {t("buttons.add_recipe", { recipe })}
          </Button>
        )}
      </Stack>
    </Field>
  );
};
