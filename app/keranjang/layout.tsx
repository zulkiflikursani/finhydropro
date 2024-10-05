import { Input } from "@nextui-org/input";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { getServerSession } from "next-auth";
import { getServerActionDispatcher } from "next/dist/client/components/app-router";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  const user = session?.user.email;
  console.log(user);
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
      <section className="flex flex-col gap-4  md:py-10">
        <div className="w-full p-2">{children}</div>
      </section>
    </>
  );
}
