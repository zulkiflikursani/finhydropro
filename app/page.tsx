import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import Home from "@/components/dashboard/Home";

export default function Dashboard() {
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
        {/* <NavbarContent>
          <NavbarItem></NavbarItem>
        </NavbarContent> */}
        <NavbarContent>
          <Input name="search" placeholder="Cari barang ..." />
        </NavbarContent>
      </Navbar>
      <Home />
    </>
  );
}
