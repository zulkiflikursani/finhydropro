"use client";
import { Input } from "@nextui-org/input";
import React, { useEffect, useState } from "react";

interface TransakiDetal {
  kode_transaski: string;
  tgl_transaksi: string;
  jenis_transaksi: string;
  dekskripsi: string;
  user: string;
  kode_produk: string;
  nama_produk: string;
  qty: number;
  harga: number;
  //   data: TypeDataPenjualan[];
}

interface Props {
  data: {} | undefined;
}
function DetailTransaksi(props: Props) {
  const [totaltagihan, settotaltagihan] = useState(0);

  //   const [totaltagihan, settotaltagihan] = useState(0);
  useEffect(() => {
    const getTotal = () => {
      if (Array.isArray(props.data)) {
        const sum = props.data.reduce(
          (accumulator, current) => accumulator + -current.qty * current.harga,
          0
        );
        settotaltagihan(sum);
      }
    };
    getTotal();
  }, [props.data]);

  return (
    <>
      <div className="flex-col space-y-2 text-[10px]">
        <Input
          label="Kode Transaksi"
          type="text"
          size="sm"
          value={
            props.data && Array.isArray(props.data) && props.data.length > 0
              ? props.data[0].kode_transaksi
              : ""
          }
        />
        <Input
          label="Nama Customer"
          type="text"
          size="sm"
          value={
            props.data && Array.isArray(props.data) && props.data.length > 0
              ? props.data[0].nama
              : ""
          }
        />
        <Input
          size="sm"
          label="Nama Perusahaan"
          type="text"
          value={
            props.data && Array.isArray(props.data) && props.data.length > 0
              ? props.data[0].customer_company
              : ""
          }
        />
        <Input
          size="sm"
          label="Alamat"
          type="text"
          value={
            props.data && Array.isArray(props.data) && props.data.length > 0
              ? props.data[0].alamat
              : ""
          }
        />
        <table className=" w-full border-collapse border border-foreground-200 mt-5  mb-2 text-foreground-600 ">
          <thead>
            <tr>
              <th className="py-2 border border-foreground-200">No</th>
              <th className="border border-foreground-200">Nama Produk</th>
              <th className="border border-foreground-200">Harga</th>
              <th className="border border-foreground-200">Qty</th>
              <th className="border border-foreground-200">jumlah</th>
            </tr>
          </thead>
          <tbody>
            {props.data &&
              Array.isArray(props.data) &&
              props.data.map((item: TransakiDetal, index: number) => (
                <tr key={index} className="hover:bg-primary-200 cursor-pointer">
                  <td className="text-center border border-foreground-200 ">
                    {index + 1}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {item.nama_produk}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {Intl.NumberFormat().format(item.harga)}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {-item.qty}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {Intl.NumberFormat().format(item.harga * -item.qty)}
                  </td>
                </tr>
              ))}
            <tr className="hover:bg-primary-200 cursor-pointer">
              <td
                className="text-center border border-foreground-200 "
                colSpan={4}
              >
                Total Tagihan
              </td>
              <td className="text-center border border-foreground-200 ">
                {Intl.NumberFormat().format(totaltagihan)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailTransaksi;
