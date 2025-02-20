import { LuLoader } from "react-icons/lu";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";

export default function Socials() {
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
    
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Button
        disabled={isPending}
        onClick={() => googleSignIn()}
        size={"icon"}
        variant={"outline"}
        className="flex w-full gap-x-2.5 text-sm font-normal"
      >
        {isPending ? (
          <LuLoader className="size-5 animate-spin" />
        ) : (
          <>
            <FcGoogle className="size-5" />
          </>
        )}
      </Button>
      <div className="flex items-center w-full gap-x-4">
        <Separator className="w-full h-px bg-input" />
        <span className="text-xs font-normal text-muted-foreground uppercase">
          or
        </span>
        <Separator className="w-full h-px bg-input" />
      </div>
    </div>
  )
}