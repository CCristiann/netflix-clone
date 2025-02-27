"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { error } from "console";
import { Button } from "../ui/button";
import { LuLoader } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import FormWrapper from "./FormWrapper";
import { Input } from "../ui/input";
import Link from "next/link";
import Socials from "./Socials";
import { SignInSchema, TSignIn } from "@/server/api/routers/auth/service/auth.service.types";

export default function SignInForm() {
  const router = useRouter();
  const form = useForm<TSignIn>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: async (values: TSignIn) => {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false
      });
    },
    onSuccess: () => {
      toast({
        title: "Great news!",
        description: "You have successfully signed in!",
      });
      form.reset();
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: "Oops, something went wrong!",
        description: err.message || "Please try again later.",
      });
    },
  })

  const onSubmit = (values: TSignIn) => mutate(values);

  return (
    <FormWrapper title="Sign in" description="Sign in to your account">
      <Socials />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="w-full space-y-2.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full space-y-1">
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="Email address"
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full space-y-1">
                  <FormLabel className="sr-only">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="Password"
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-1.5">
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending ? (
                  <LuLoader className="size-5 animate-spin" />
                ) : (
                  <span>Sign in</span>
                )}
              </Button>
              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
}
