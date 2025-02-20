import { signIn } from "@/server/auth";
import { TRPCError } from "@trpc/server";
import { SignInSchema, SignUpSchema, TSignIn, TSignUp } from "./auth.service.types";
import { validateSchema } from "@/lib/validateSchema";
import { db } from "@/server/db";
import bcrypt from "bcryptjs";
class AuthService {
  public async googleSignIn() {
    try {
      await signIn("google", {
        redirect: false,
      });
    } catch (err) {
      console.log("GOOGLE SIGN IN ERROR", err);
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Something went wrong, please try again later.",
      });
    }
  }

  public async signUp(args: TSignUp) {
    try {
      const { email, password, fullName } = validateSchema(SignUpSchema, args);

      const existingUser = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (existingUser)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User with this email already exists. Please try to login.",
        });

      const encryptedPassword = await this.encryptPassword(password);

      await db.user.create({
        data: {
          name: fullName,
          email,
          password: encryptedPassword,
        },
      });

      return { success: true };
    } catch (err) {
      if (err instanceof TRPCError) {
        throw new TRPCError({
          code: err.code,
          message: err.message,
        });
      } else {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Something went wrong, please try again later.",
        });
      }
    }
  }

  public async signIn(args: TSignIn) {
    
  }

  private async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10); // Genera un salt casuale
    const hashedPassword = await bcrypt.hash(password, salt); // Genera la password cifrata
    return hashedPassword;
  }

  private async decryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
}

export const authService = new AuthService();
