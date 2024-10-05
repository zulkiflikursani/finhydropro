import { Input } from "@nextui-org/input";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4 ">
            <div
              className={`${``} flex p-2 justify-center items-center  gap-1 `}
            >
              <span className={`font-black text-green-600 ${``}`}>FH</span>
              <h4
                className={`${``} text-foreground-800 font-bold tracking-tighter`}
              >
                FindHydroPro
              </h4>
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <Input name="search" placeholder="Cari barang ..." />
        </NavbarContent>
      </Navbar>
      <section className="flex flex-col flex-1 gap-1 p-2  ">
        <div className="inline-block container mx-auto">{children}</div>
      </section>
    </>
  );
}