import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { cn } from "@/lib/utils";
import { auth } from "@/server/auth";
import UserButton from "./UserButton";

interface NavbarProps {
    className?: string;
  }

export default async function Navbar({ className }: NavbarProps) {
    const session = await auth()
    if(!session) return null

    return (
        <header className={cn("py-4 bg-black/50 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-50", className)}>
            <Container>
                <div className="flex items-center justify-between">
                    <Logo />
                    <UserButton user={session.user} />
                </div>
            </Container>
        </header>
    )
}