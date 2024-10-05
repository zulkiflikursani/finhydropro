"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { generateJurnal } from "../jurnal/generate";
interface ProdukType {
  id: number;
  kode_produk: string;
  nama_produk: string;
  deskripsi: string;
  company: string;
  stok_awal: number;
  mutasi_saldo: number;
  qty: number;
  harga_beli: number;
  harga_jual: number;
  final_stok: number;
  total_harga: number;
}
interface TypeTransaksiHeader {
  company: string;
  kode_transaksi: string;
  tgl_transaksi: string;
  jenis_transaksi: string;
  deksripsi: string;
  user: string;
  status_transaksi: string;
}

interface TypeTransaksiDetail {
  kode_transaksi: string;
  kode_produk: string;
  qty: number;
  harga: number;
}

interface TypeTransaksiDetailJurnal {
  kode_transaksi: string;
  no_akun: string;
  debet: number;
  kredit: number;
}

interface TypeMapingTransaksi {
  jenis_transaksi: string;
  kode_akun: string;
  posisi: string;
}
export const submitTransaksi = async (data: ProdukType[] | null) => {
  const session = await getServerSession(authOptions);
  const user = session?.user.email || "";
  const getCurrentTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Makassar",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    };
    return now.toLocaleTimeString("id-ID", options).replace(/[^\d]/g, "");
  };
  const getCurrentDateMakassar = () => {
    const makassarTime = new Date().toLocaleString("en-CA", {
      timeZone: "Asia/Makassar",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return makassarTime.split(",")[0]; // "en-CA" gives you the "YYYY-MM-DD" format
  };

  const tgl_transaksi = getCurrentDateMakassar();
  const kode_transaksi = "JPJ-" + getCurrentTime();
  let dataTransaksiHeader: TypeTransaksiHeader;
  if (data != null) {
    dataTransaksiHeader = {
      company: data[0].company,
      kode_transaksi: kode_transaksi,
      tgl_transaksi: tgl_transaksi,
      jenis_transaksi: "2",
      deksripsi: "Penjualan",
      user: user,
      status_transaksi: "0",
    };
    // });
  }
  let dataTransaksiDetail: TypeTransaksiDetail[];
  if (data !== undefined && data !== null) {
    dataTransaksiDetail = await data.map((item) => {
      return {
        kode_transaksi: kode_transaksi,
        kode_produk: item.kode_produk,
        qty: -item.qty,
        harga: item.harga_jual,
      };
    });
  }
  const mapJurnal = await generateJurnal("2");
  let dataTransaksiDetailJurnal: TypeTransaksiDetailJurnal[];
  let allDataTransaksiDetailJurnal: TypeTransaksiDetailJurnal[];
  if (
    data !== undefined &&
    mapJurnal.status === "ok" &&
    Array.isArray(mapJurnal.message)
  ) {
    allDataTransaksiDetailJurnal = [];
    await Promise.all(
      (data || []).map(async (itemdata) => {
        dataTransaksiDetailJurnal = await Promise.all(
          mapJurnal.message.map((item: TypeMapingTransaksi) => {
            let harga = 0;
            if (item.kode_akun === "1101" || item.kode_akun === "4001") {
              harga = itemdata.harga_jual * itemdata.qty;
            } else {
              harga = itemdata.harga_beli * itemdata.qty;
            }
            return {
              kode_transaksi: kode_transaksi,
              no_akun: item.kode_akun,
              debet: item.posisi === "D" ? harga : 0,
              kredit: item.posisi === "K" ? harga : 0,
            };
          })
        );
        if (dataTransaksiDetailJurnal) {
          allDataTransaksiDetailJurnal.push(...dataTransaksiDetailJurnal);
          // Ensure this is an array
        }
      })
    );
  }
  // dataTransaksiDetailJurnal.push(dataJurnal);
  const prisma = new PrismaClient();
  const transactionCretePenjualan = await prisma.$transaction(async (tx) => {
    try {
      // return dataTransaksiHeader
      if (mapJurnal.status === "fail") {
        return {
          status: "fail",
          message: "Gagal Menyimpan Data",
        };
      } else if (data != null) {
        if (dataTransaksiDetail !== undefined) {
          const result = await tx.tb_transaksi_header.createMany({
            data: dataTransaksiHeader,
          });
          const createTransaksiPenjualanDetail =
            await tx.tb_transaksi_detail.createMany({
              data: dataTransaksiDetail,
            });
          const createTransaksiDetailJurnal =
            await tx.tb_transaksi_detail_jurnal.createMany({
              data: allDataTransaksiDetailJurnal,
            });
          if (result.count !== 0) {
            return {
              status: "ok",
              message: "Berhasil melakukan transaksi !",
            };
          } else {
            return {
              status: "ok",
              message: "Gagal melakukan transaksi",
            };
          }
        } else {
          return {
            status: "fail",
            message: "Data Transaski Undefined",
          };
        }
      } else {
        return {
          status: "fail",
          message: "data kosong",
        };
      }
    } catch (error) {
      return {
        status: "fail",
        message: error,
      };
    }
  });
  if (transactionCretePenjualan?.status == "ok") {
    return {
      status: "ok",
      message: "Berhasil Meyimpan data",
      data: {
        kode_transaksi: kode_transaksi,
      },
    };
  } else {
    return {
      status: "fail",
      message: transactionCretePenjualan?.message || "Gagal menyimpan Jurnal !",
    };
  }
};
