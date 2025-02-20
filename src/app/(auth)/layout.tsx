import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo />
            <ThemeToggle />
          </div>
        </Container>
      </header>
      <main className="relative flex h-screen w-full items-center justify-center">
        <div className="absolute left-0 top-0 -z-10 h-28 w-screen bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute left-0 top-0 -z-10 h-screen w-screen bg-black/60"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-28 w-screen bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

        <div className="absolute left-0 top-0 h-full w-full">
          <div className="relative -z-20 h-full w-full">
            <Image src={"/netflix-hero.jpg"} fill alt="Netflix Hero" />
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
