import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { authService } from "../auth/service/auth.service";
import { SignUpSchema } from "./service/auth.service.types";

export const authRouter = createTRPCRouter({
    googleSignIn: publicProcedure.mutation(({ ctx }) => {
        return authService.googleSignIn();
    }),
    signUp: publicProcedure.input(SignUpSchema).mutation(({ ctx, input }) => {
        return authService.signUp(input);
    }),
})