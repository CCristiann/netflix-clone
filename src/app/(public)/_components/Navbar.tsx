import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { auth } from "@/server/auth";

import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export default async function Navbar({ className }: NavbarProps) {
  const session = await auth();

  return (
    <header className={cn(className)}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-x-4">
            <ThemeToggle />
            {session ? (
              <div className="text-background dark:text-foreground">{session.user.email}</div>
            ) : (
              <Link className={buttonVariants()} href="/sign-in">
                Sign in
              </Link>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
