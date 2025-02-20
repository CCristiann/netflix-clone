"use client";

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
import { toast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { LuLoader } from "react-icons/lu";
import FormWrapper from "./FormWrapper";
import { Input } from "../ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  SignUpSchema,
  TSignUp,
} from "@/server/api/routers/auth/service/auth.service.types";
import Socials from "./Socials";

export default function SignUpForm() {
  const form = useForm<TSignUp>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = api.auth.signUp.useMutation({
    onSuccess: () => {
      toast({
        title: "Great news!",
        description: "You have successfully signed up!",
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
  });

  const onSubmit = (values: TSignUp) => mutate(values);
  return (
    <FormWrapper
      title="Sign up"
      description="Get started by creating an account!"
    >
      <Socials />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="w-full space-y-2.5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full space-y-1">
                  <FormLabel className="sr-only">Full name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="text"
                      placeholder="Full name"
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full space-y-1">
                  <FormLabel className="sr-only">Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="Confirm password"
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
                  <span>Create an account</span>
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
