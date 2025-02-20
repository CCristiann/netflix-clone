"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/server/auth";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { LuLogOut, LuUser } from "react-icons/lu";

export default function UserButton({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage
            src={user.image || undefined}
            alt="User avatar"
          />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LuUser className="size-5" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button className="w-full" onClick={() => signOut()}>
            <LuLogOut className="size-5" />
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
