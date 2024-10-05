import Link from "next/link";
import React from "react";
interface TypeTransaksiHeader {
  id: number;
  company: string;
  kode_transaksi: string;
  tgl_transaksi: string;
  jenis_transaksi: string;
  deksripsi: string;
  user: string;
  status_transaksi: string;
}
interface Props {
  data: TypeTransaksiHeader[] | undefined;
}
function TabelRiwatatTransaksi(props: Props) {
  return (
    <div className="text-[10px] mt-2">
      <table className=" w-full border-collapse border border-foreground-200 mt-5  mb-2 text-foreground-600">
        <thead>
          <tr>
            <th className="py-2 border border-foreground-200">No</th>
            <th className="border border-foreground-200">Tanggal Tranasksi</th>
            <th className="border border-foreground-200">Kode Transaksi</th>
            <th className="border border-foreground-200">Status</th>
            <th className="border border-foreground-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data !== undefined
            ? props.data.map((item: TypeTransaksiHeader, i: number) => (
                <tr
                  key={item.id}
                  className="hover:bg-primary-200 cursor-pointer"
                >
                  <td className="text-center border border-foreground-200 ">
                    {i++ + 1}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {item.tgl_transaksi}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {item.kode_transaksi}
                  </td>
                  <td className="text-center border border-foreground-200 ">
                    {item.status_transaksi === "1" ? "Valid" : "Tidak Valid"}
                  </td>
                  <td className="text-center border border-foreground-200 items-center ">
                    <Link
                      className="text-center rounded-full shadow-md shadow-gray-500 cursor-pointer bg-green-500 w-full active:bg-green-400 my-1 px-2"
                      href={"../transaksi/" + item.kode_transaksi}
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default TabelRiwatatTransaksi;
