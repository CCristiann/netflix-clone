import Navbar from "./_components/Navbar"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar className="absolute w-full top-0 left-0 z-50" />
    <main>{children}</main>
    </>
  );
}