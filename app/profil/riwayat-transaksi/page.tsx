import { authOptions } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import TabelRiwatatTransaksi from "@/components/riwayat-transaksi/TabelRiwatatTransaksi";
import { getDataPenjualan } from "@/app/lib/penjualan/data";

export default async function Riwayat() {
  const session = await getServerSession(authOptions);
  const dataPenjualan = await getDataPenjualan();
  console.log(dataPenjualan);
  return (
    <div className="p-1">
      <h1 className="font-bold">Riwayat Transaksi</h1>
      <TabelRiwatatTransaksi data={dataPenjualan?.data} />
    </div>
  );
}
