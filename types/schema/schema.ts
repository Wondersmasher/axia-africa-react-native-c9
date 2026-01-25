import * as z from "zod";

export const inputSchema = z.object({
  email: z.email("Invalid email provided"),
  firstName: z
    .string("This is not a string")
    .min(2, "First name is too short!")
    .max(20, "First name is too long!"),
  lastName: z
    .string("This is not a string")
    .min(2, "Last name is too short!")
    .max(20, "Last name is too long!"),
  age: z.string("This is not a string"),
  // gender: z
  //   .enum(["male", "female", ""], "Gender must either be a male or female!")
  gender: z.string(),
});

export const loginSchema = z.object({
  email: z.email("Invalid email provided"),
  name: z
    .string("This is not a string")
    .min(2, "Name is too short!")
    .max(20, "Name is too long!"),
  role: z.enum(["user", "admin"], "Role must either be a user or admin!"),
});

export type TInputSchema = z.infer<typeof inputSchema>;
export type TLoginSchema = z.infer<typeof loginSchema>;
