import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { authService } from "../auth/service/auth.service";

export const authRouter = createTRPCRouter({
    googleSignIn: publicProcedure.mutation(({ ctx }) => {
        return authService.googleSignIn();
    }),
})