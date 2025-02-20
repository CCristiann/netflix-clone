import { z } from "zod";

export const SignUpSchema = z
  .object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(6, "The password must have at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Indica il campo in cui mostrare l'errore
  });
export type TSignUp = z.infer<typeof SignUpSchema>;

export const SignInSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "The password must have at least 6 characters"),
  })
export type TSignIn = z.infer<typeof SignInSchema>;
