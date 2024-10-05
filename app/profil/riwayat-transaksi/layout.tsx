import { Input } from "@nextui-org/input";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center ">
      <div className="w-screen text-center ">{children}</div>
    </section>
  );
}
