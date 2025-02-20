import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";

import { db } from "@/server/db";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "../api/routers/auth/service/auth.service.types";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      credentials: {
        email: {
          label: "Email",
          placeholder: "john.doe@example.com",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "********",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const validatedFields = await SignInSchema.safeParseAsync(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const existingUser = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (!existingUser || !existingUser.password) return null;

        const isPasswordCorrect = await bcrypt.compare(
          password,
          existingUser.password,
        );

        if (!isPasswordCorrect || existingUser.password !== password)
          return null;

        return existingUser;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow OAuth without email verification
      if (account?.provider === "google") return profile?.email_verified!;

      const existingUser = await db.user.findUnique({
        where: { id: user.id },
      });

      if (!existingUser || !existingUser.email) return false;

      return true;
    },
    session: ({ session, token }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
