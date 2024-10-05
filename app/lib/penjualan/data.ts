import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export const getDataPenjualan = async () => {
  const session = await getServerSession(authOptions);
  const prisma = new PrismaClient();
  try {
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
    }
  } catch (error) {
    return {
      status: 500,
      error: error,
    };
  }
};

export const getDataPenjualanByKode = async (kode_trasanksi: string) => {
  const prisma = new PrismaClient();
  try {
    const query = `SELECT
                    tb_transaksi_header.kode_transaksi,
                    tb_user_customer.nama,
                    tb_user_customer.alamat,
                    tb_user_customer.no_telpon,
                    tb_user_customer.customer_company,
                    tb_transaksi_header.tgl_transaksi,
                    tb_transaksi_header.jenis_transaksi,
                    tb_transaksi_header.deksripsi,
                    tb_transaksi_header.user,
                    tb_transaksi_detail.kode_produk,
                    tb_transaksi_detail.qty,
                    tb_transaksi_detail.harga
                  FROM
                    tb_transaksi_header
                    LEFT JOIN tb_transaksi_detail ON tb_transaksi_header.kode_transaksi = tb_transaksi_detail.kode_transaksi
                    LEFT JOIN tb_user_customer on tb_transaksi_header.user=tb_user_customer.email
                  WHERE
                    tb_transaksi_header.kode_transaksi = ?`;
    const data = await prisma.$queryRawUnsafe(query, kode_trasanksi);

    // Check if the data is an array
    if (Array.isArray(data)) {
      // Data is an array of objects, and we can safely work with it
      const jsonData = data as { [key: string]: any }[];
      console.log(jsonData);
      return {
        status: 200,
        data: jsonData,
      };
    } else {
      console.log("Unexpected data format", data);
    }
  } catch (error) {
    return {
      status: 500,
      error: error,
    };
  }
};
