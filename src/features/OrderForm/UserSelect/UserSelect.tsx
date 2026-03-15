import { Button, Field, Select, Stack } from "@/components";
import { useState } from "react";
import { useOrderForm } from "../useOrderForm";
import type { OrderData } from "../schema";
import type { Path } from "react-hook-form";

type userProfile = {
  name: string;
  id: string;
  fields: Partial<OrderData>;
};

const userProfiles: userProfile[] = [
  {
    name: "company piet B.V.",
    id: "1",
    fields: {
      name: "piet",
      title: "mr",
      company: "company piet B.V.",
      phone: "+31612345678",
      customerType: "business",
      products: [
        { productId: "cucumber", amount: 1 },
        { productId: "tomato", amount: 2 },
        { productId: "lettuce", amount: 3 },
      ],
    },
  },
  {
    name: "individual klaas",
    id: "2",
    fields: {
      name: "klaas",
      title: "mrs",
      company: "",
      phone: "",
      customerType: "individual",
      products: [
        { productId: "tomato", amount: 2 },
        { productId: "lettuce", amount: 3 },
      ],
    },
  },
];

const options = userProfiles.map((profile) => ({
  value: profile.id,
  label: profile.name,
}));

export const UserSelect = () => {
  const [user, setUser] = useState<string | undefined>();
  const { setValue } = useOrderForm();

  const handleSetUser = () => {
    if (!user) return;

    const selectedProfile = userProfiles.find((profile) => profile.id === user);

    if (!selectedProfile) return;

    console.log("Selected user profile fields:", selectedProfile.fields);

    Object.entries(selectedProfile.fields).forEach(([key, value]) => {
      setValue(key as Path<OrderData>, value);
    });
  };

  return (
    <Field>
      <Field.Label>User</Field.Label>
      <Stack direction="row" gap="0.5rem">
        <Select
          options={options}
          onChange={(event) => setUser(event?.target.value)}
        />

        {user && <Button onClick={handleSetUser}>Set user fields</Button>}
      </Stack>
    </Field>
  );
};
