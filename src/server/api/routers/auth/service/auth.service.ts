import { signIn } from "@/server/auth";
import { TRPCError } from "@trpc/server";

class AuthService {
  async googleSignIn() {
    try {
        await signIn("google", {
          redirect: false
        })
    } catch (err) {
      console.log("GOOGLE SIGN IN ERROR", err);
        throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Something went wrong, please try again later.",
        })
    }
  }
}

export const authService = new AuthService();