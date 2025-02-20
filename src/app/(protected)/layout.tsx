import Navbar from "./_components/Navbar"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  );
}