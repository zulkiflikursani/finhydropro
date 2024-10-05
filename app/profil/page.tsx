import { title } from "@/components/primitives";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Input } from "@nextui-org/input";
import ButtonLogout from "@/components/ButtonLogout";
import Link from "next/link";

export default async function DocsPage() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className={title()}>Profil</h1>
      <div className="flex-col w-screen text-left p-2 space-y-2">
        <Input label={"Nama"} value={session?.user.nama} />
        <Input label={"Email"} value={session?.user.email} />
        <Input label={"No Telpon"} value={session?.user.no_telpon} />
        <Input label={"Alamat"} value={session?.user.alamat} />
        <Link href={"/profil/riwayat-transaksi"}>
          <div className="text-center rounded-full shadow-md shadow-gray-500 cursor-pointer mt-2 bg-green-500 py-1 w-full active:bg-green-400">
            Riwayat Transaksi
          </div>
        </Link>
        <div className="text-center rounded-full shadow-md shadow-gray-500 cursor-pointer bg-green-500 py-1 w-full active:bg-green-400">
          Update Profil
        </div>

        <ButtonLogout />
      </div>
    </div>
  );
}
