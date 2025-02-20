"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
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
export default function SignInForm() {
  const router = useRouter();
  const form = useForm();

  const { mutate: googleSignIn, isPending } = useMutation({
    mutationKey: ["googleSignIn"],
    mutationFn: async () => {
      await signIn("google", {
        callbackUrl: process.env.NEXT_PUBLIC_URL,
      });
    },
    // onSuccess: () => {
    //   router.push("/browse");
    // },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: "Oops, something went wrong!",
        description: err.message || "Please try again later.",
      });
    },
  });

  const onSubmit = () => googleSignIn();

  return (
    <FormWrapper title="Sign in" description="Sign in to your account">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? (
            <LuLoader className="size-5 animate-spin" />
          ) : (
            <FcGoogle className="size-5" />
          )}
        </Button>
      </form>
    </Form>
    </FormWrapper>
  );
}
