import z from "zod";

export const schema = z.object({
  name: z.string().min(1).max(3),
  title: z.enum(["Dhr.", "Mevr."]),
});
