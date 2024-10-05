"use server";
import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
interface Product {
  id: number;
  kode_produk: string;
  nama_produk: string;
  deskripsi: string;
  company: string;
  stok_awal: number;
  harga_beli: number;
  harga_jual: number;
  mutasi_saldo: number;
  final_stok: number;
}
interface FetchProductResponse {
  status: "ok" | "fail";
  data: Product[] | string;
}

const currentDate = new Date();

export const fetchProduct = async (
  param: string
): Promise<FetchProductResponse> => {
  const prisma = new PrismaClient();
  const query = "";
  noStore();
  try {
    const bulan = currentDate.getMonth() + 1;
    const tahun = currentDate.getFullYear();
    const tanggal = tahun + "-" + bulan + "-01";
    const query = `SELECT
      tb_produk.kode_produk,
      tb_produk.nama_produk,
      tb_produk.deskripsi,
      tb_produk.company,
      tb_produk.harga_jual,
      tb_produk.harga_beli,
      IFNULL(saldo_awal.qty,0) AS stok_awal,
      IFNULL(mutasi.qty,0) as mutasi_saldo,
      IFNULL(saldo_awal.qty,0) + IFNULL(mutasi.qty,0) as final_stok
    FROM
      tb_produk
      LEFT JOIN (
        SELECT
          tb_transaksi_header.tgl_transaksi,
          tb_transaksi_header.kode_transaksi,
          tb_transaksi_header.company,
          tb_transaksi_header.jenis_transaksi,
          tb_transaksi_detail.kode_produk,
          sum(tb_transaksi_detail.qty) as qty,
          tb_transaksi_detail.harga
        FROM
          tb_transaksi_header
          LEFT JOIN tb_transaksi_detail ON tb_transaksi_detail.kode_transaksi = tb_transaksi_header.kode_transaksi
        WHERE
          tb_transaksi_header.tgl_transaksi < '${tanggal}'
          and tb_transaksi_header.status_transaksi=1 
          group by tb_transaksi_detail.kode_produk
          ) saldo_awal ON saldo_awal.kode_produk = tb_produk.kode_produk and saldo_awal.company=tb_produk.company
      LEFT JOIN
      (
      SELECT
          tb_transaksi_header.tgl_transaksi,
          tb_transaksi_header.kode_transaksi,
          tb_transaksi_header.company,
          tb_transaksi_header.jenis_transaksi,
          tb_transaksi_detail.kode_produk,
          sum(tb_transaksi_detail.qty) as qty,
          if(tb_transaksi_header.jenis_transaksi='1',tb_transaksi_detail.harga,0) as harga_beli,
          if(tb_transaksi_header.jenis_transaksi='2',tb_transaksi_detail.harga,0) as harga_jual
        FROM
          tb_transaksi_header
          LEFT JOIN tb_transaksi_detail ON tb_transaksi_detail.kode_transaksi = tb_transaksi_header.kode_transaksi 
        WHERE
          month(tb_transaksi_header.tgl_transaksi) = ${bulan}
          AND year(tb_transaksi_header.tgl_transaksi) = ${tahun} 
          and tb_transaksi_header.status_transaksi=1 
          GROUP BY tb_transaksi_detail.kode_produk
      )mutasi on tb_produk.kode_produk = mutasi.kode_produk and mutasi.company=tb_produk.company 
      where tb_produk.nama_produk like "%${param}%" `;
    const response: Product[] = await prisma.$queryRawUnsafe(query);
    return {
      status: "ok",
      data: response,
    };
  } catch (error) {
    return {
      status: "fail",
      data: "",
    };
  }
};
