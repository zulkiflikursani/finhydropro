"use client";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Toast from "../Toast";

interface TypeProduk {
  id: number;
  kode_produk: string;
  nama_produk: string;
  deskripsi: string;
  company: string;
  stok_awal: number;
  harga_beli: number;
  mutasi_saldo: number;
  harga_jual: number;
  final_stok: number;
}
interface PropsType {
  produk: TypeProduk[] | string;
}
function ProductCard({ produk }: PropsType) {
  const [alert, setAlert] = useState("");
  const router = useRouter();
  const [penampungan, setPenampungan] = useState<TypeProduk[]>([]);
  // let penampungan: TypeProduk[] = [];
  // localStorage.clear();

  useEffect(() => {
    // Ensure localStorage is accessed only after the component is mounted
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("dataKeranjang");
      if (storage != null) {
        const prevData: TypeProduk = JSON.parse(storage);
        if (Array.isArray(prevData)) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          setPenampungan(prevData);
        }
        // else {
        //   penampungan.push(prevData);
        // }
      }
    }
  }, []);

  async function handleCheckOut(data: TypeProduk) {
    if (produk instanceof Error) {
      return <div>Error: {produk.message}</div>; // Display error message
    }
    if (data.final_stok < 1) {
      setAlert(
        `Stok Barang ${data.nama_produk} Kosong. Silahkan Pilih barang yang lain`
      );
    } else {
      const cekproduk = penampungan.find(
        (item) => item.kode_produk === data.kode_produk
      );
      if (cekproduk) {
        setAlert(`Barang ${data.nama_produk} sudah berada di kerangjang`);
      } else {
        const updatepenampungan = [...penampungan, data];
        setPenampungan(updatepenampungan);
        window.localStorage.setItem(
          "dataKeranjang",
          JSON.stringify(updatepenampungan)
        );
        router.push("/keranjang");
      }
    }
  }

  if (!Array.isArray(produk)) {
    return <div>No products available.</div>;
  }
  return (
    <div className="md:container md:flex md:gap-2 space-y-2 md:space-y-0  mb-20  w-full ">
      {alert && <Toast message={alert} onClose={() => setAlert("")} />}
      {produk.map((item, i) => (
        <div key={item.kode_produk} className="md:w-[30vh] w-ful">
          <div className="flex-col justify-items-center items-center border-spacing-1 border border-foreground-200 p-3 rounded-large ">
            <div className="text-center ">
              <Image
                className=" mx-auto h-auto"
                alt={"Gambar Produk"}
                src={"/assets/images/selada.jpg"}
                width={200}
                height={20}
              />
            </div>
            <Divider />
            <div className="flex-col">
              <div>Nama : {item.nama_produk}</div>
              <div>
                Harga : {Intl.NumberFormat("id-ID").format(item.harga_jual)}
              </div>
              <div>Stok: {item.final_stok}</div>
            </div>
            <div className="flex">
              <div
                className="bg-green-600 text-white shadow-md shadow-green-600 rounded-full w-32 text-center  p-1 cursor-pointer my-2 hover:bg-green-500"
                onClick={() => handleCheckOut(item)}
              >
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
