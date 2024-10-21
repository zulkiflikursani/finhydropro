import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { unstable_noStore as noStore } from "next/cache";

/**
 * Get all data penjualan from the database
 * @returns Data penjualan
 */
export const getDataPenjualan = async (): Promise<{
  status: number;
  data?: any;
  error?: string;
}> => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      status: 401,
      error: "Unauthorized",
    };
  }

  const prisma = new PrismaClient();
  noStore;
  try {
    /**
     * Query untuk mengambil semua data penjualan dari database
     */
    const data = await prisma.tb_transaksi_header.findMany({
      where: {
        user: session?.user.email,
      },
    });

    if (data) {
      return {
        status: 200,
        data: data,
      };
    } else {
      return {
        status: 404,
        error: "Data not found",
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: error as string,
    };
  } finally {
    await prisma.$disconnect();
  }
};
/**
 * Get data penjualan by kode transaksi
 * @param kodeTransaksi Kode transaksi yang akan diambil datanya
 * @returns Data penjualan berdasarkan kode transaksi
 */
export const getDataPenjualanByKode = async (kodeTransaksi: string) => {
  const prisma = new PrismaClient();
  noStore;
  try {
    /**
     * Query untuk mengambil data penjualan berdasarkan kode transaksi
     * Menggunakan join 4 tabel tb_transaksi_header, tb_transaksi_detail, tb_user_customer, dan tb_produk
     * Menggunakan parameter kode_transaksi untuk memfilter data berdasarkan kode transaksi
     */
    const query = `
      SELECT
        th.kode_transaksi,
        th.tgl_transaksi,
        th.jenis_transaksi,
        th.deksripsi,
        th.user,
        uc.nama,
        uc.alamat,
        uc.no_telpon,
        uc.customer_company,
        td.kode_produk,
        p.nama_produk,
        td.qty,
        td.harga
      FROM
        tb_transaksi_header th
        LEFT JOIN tb_transaksi_detail td ON th.kode_transaksi = td.kode_transaksi
        LEFT JOIN tb_user_customer uc ON th.user = uc.email
        LEFT JOIN tb_produk p ON p.kode_produk = td.kode_produk AND p.company = th.company
      WHERE
        th.kode_transaksi = ?
    `;
    const data = await prisma.$queryRawUnsafe<Penjualan[]>(
      query,
      kodeTransaksi
    );

    return {
      status: 200,
      data,
    };
  } catch (error) {
    return {
      status: 500,
      error,
    };
  } finally {
    await prisma.$disconnect();
  }
};

interface Penjualan {
  kode_transaksi: string;
  tgl_transaksi: string;
  jenis_transaksi: string;
  deksripsi: string;
  user: string;
  nama: string;
  alamat: string;
  no_telpon: string;
  customer_company: string;
  kode_produk: string;
  nama_produk: string;
  qty: number;
  harga: number;
}
