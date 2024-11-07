import { z } from "zod";

export const locationFormSchema = z.object({
  country: z
    .number()
    .min(1, { message: "Please select an option for country" }),
  state: z.number().min(1, { message: "Please select an option for state" }),
  city: z.number().min(1, { message: "Please select an option for city" }),
  address: z.string().min(1, { message: "Address is required" }),
  zip: z.string().min(1, { message: "Enter zip code" }),
});

export const roomFunctionalityFormSchema = z.object({
  name: z.string().min(1, { message: "name is required." }),
  functionality: z
    .number()
    .min(1, { message: "room functionality is required." }),
});
