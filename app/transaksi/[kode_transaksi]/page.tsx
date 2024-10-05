import React from "react";
import DetailTransaksi from "../../../components/riwayat-transaksi/DetailTransaksi";
import { getDataPenjualanByKode } from "../../lib/penjualan/data";

interface TypeTransaksiDetal {
  kode_transaski: string;
  tgl_transaksi: string;
  jenis_transaksi: string;
  dekskripsi: string;
  user: string;
  kode_produk: string;
  qty: number;
  harga: number;
  //   data: TypeDataPenjualan[];
}
export default async function Page({
  params,
}: {
  params: { kode_transaksi: string };
}) {
  const kode_transaksi = params.kode_transaksi;
  const dataPenjualan = await getDataPenjualanByKode(kode_transaksi);
  return (
    <div className="text-center">
      <h1 className="font-bold text-[16px] my-2">Detail Tranasaksi</h1>
      <DetailTransaksi data={dataPenjualan?.data} />
    </div>
  );
}
