import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { schema } from "./schema";
import { TitleSelect } from "./TitleSelect";
import { NameInput } from "./NameInput";

export const OrderForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { handleSubmit } = form;

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleSelect />

        <NameInput />

        <input type="submit" />
      </form>
    </FormProvider>
  );
};
