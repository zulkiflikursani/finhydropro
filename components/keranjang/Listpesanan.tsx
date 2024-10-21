"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { submitTransaksi } from "@/app/lib/penjualan/action";
import { useSession } from "next-auth/react";
import { Spinner } from "@nextui-org/react";

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

function Listpesanan() {
  const session = useSession();
  const router = useRouter();
  const [dataKeranjang, setdataKeranjang] = useState<ProdukType[] | null>(null);
  const [quantities, setQuantities] = useState<number[]>([]);
  const [totCheckout, seTotCheckout] = useState<number>(0);
  const hasMounted = useRef(false);
  const [buttonText, setButtonText] = useState("Submit");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataStorage = localStorage.getItem("dataKeranjang");
      if (dataStorage != null) {
        const parsedData = parseJson(dataStorage);
        if (hasMounted.current == false) {
          setdataKeranjang(parsedData);
          setdataKeranjang((prevData) =>
            prevData != null
              ? prevData.map((item, index) => ({
                  ...item,
                  qty: 1,
                  total_harga: item.harga_jual,
                }))
              : null
          );
          setQuantities(parsedData.map(() => 1));
        }
      }
      hasMounted.current = true;
    }
  }, []);
  useEffect(() => {
    function findTotalCheckout() {
      seTotCheckout(
        dataKeranjang != null
          ? dataKeranjang.reduce((total, item) => total + item.total_harga, 0)
          : 0
      );
    }
    findTotalCheckout();
  }, [dataKeranjang]);
  const parseJson = (data: any) => {
    let item;
    if (typeof window !== "undefined") {
      // Perform localStorage action
      item = JSON.parse(data);
    }
    return item;
  };

  function handleKosongkan() {
    window.localStorage.clear();
    setdataKeranjang(null);
    router.refresh();
  }

  function addProduk() {
    router.push("/pricing");
  }
  // Function to handle incrementing the quantity
  const handleIncrement = (index: number, kode_produk: string) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    setdataKeranjang((prevData) =>
      prevData != null
        ? prevData.map((item) =>
            item.kode_produk === kode_produk
              ? {
                  ...item,
                  qty: newQuantities[index],
                  total_harga: newQuantities[index] * item.harga_jual,
                }
              : item
          )
        : null
    );
  };

  // Function to handle decrementing the quantity
  const handleDecrement = (index: number, kode_produk: string) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      setdataKeranjang((prevData) =>
        prevData != null
          ? prevData.map((item) =>
              item.kode_produk === kode_produk
                ? {
                    ...item,
                    qty: newQuantities[index],
                    total_harga: newQuantities[index] * item.harga_jual,
                  }
                : item
            )
          : null
      );
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true); // Set isProcessing to true when submission starts
    // console.log(dataKeranjang);
    const phoneTujuan = "6282343947212";
    try {
      const response = await submitTransaksi(dataKeranjang);
      console.log("dat-req:", dataKeranjang);
      if (response.status === "ok") {
        const productDetails = dataKeranjang
          ?.map(
            (item, index) =>
              `${index + 1}. ${item.nama_produk}, ${item.qty} pcs x ${item.harga_jual} = ${(item.qty * item.harga_jual).toLocaleString()}`
          )
          .join("%0A");
        const message = `Purchase Order : ${response.data?.kode_transaksi}%0AID Customer : ${session.data?.user.email}%0ANama Customer: ${session.data?.user.nama}%0ANo Telpon : ${session.data?.user.no_telpon}%0A%0A${productDetails}%0A%0ATotal PO sebesar ${parseInt(totCheckout.toString()).toLocaleString()}%0ATerima kasih`;
        const whatsappUrl = `https://wa.me/${phoneTujuan}?text=${message}`;
        window.open(whatsappUrl, "_blank");
        setdataKeranjang([]);
        setIsProcessing(false);
      } else {
      }
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };
  return (
    <div className="flex-col bg-white gap-1 w-full space-y-2 mb-52">
      {dataKeranjang != null ? (
        dataKeranjang.map((item, i) => (
          <div key={i} className="border-1 p-2  ">
            <div className="w-52 ">
              {" "}
              <Image
                className=""
                alt={""}
                src={"/assets/images/selada.jpg"}
                width={500}
                height={20}
              />
            </div>
            <div className="w-full flex-col ">
              <div>ID: {item.kode_produk}</div>
              <div>Nama : {item.nama_produk}</div>
              <div>Harga : {Intl.NumberFormat().format(item.harga_jual)}</div>
              <div>Harga : {Intl.NumberFormat().format(item.total_harga)}</div>
              <div className="flex gap-1 items-center">
                <div
                  className="flex bg-gray-400 w-8 rounded-lg px-2 items-center justify-center cursor-pointer shadow-sm shadow-emerald-400 active:bg-gray-300"
                  onClick={() => handleIncrement(i, item.kode_produk)}
                >
                  +
                </div>
                <input
                  className="w-10 border-1 border-gray-400"
                  type="number"
                  name=""
                  id=""
                  value={quantities[i]}
                />
                <div
                  className="flex bg-gray-400 w-8 rounded-lg px-2 items-center justify-center cursor-pointer shadow-sm shadow-emerald-400 active:bg-gray-300"
                  onClick={() => handleDecrement(i, item.kode_produk)}
                >
                  -
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full bg-green-300 text-center mx-auto py-5">
          Keranjang masih kosong
        </div>
      )}
      <div className="flex justify-between border-1 border-gray-300  p-2 bg-foreground-100">
        <div className="flex-col">
          <label htmlFor="">Total Pembelian</label>
        </div>
        <div className="flex-col">
          <label htmlFor="">{Intl.NumberFormat().format(totCheckout)}</label>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="text-center rounded-full shadow-md shadow-gray-500 cursor-pointer bg-green-500 py-1 w-32 active:bg-green-400"
          onClick={() => handleKosongkan()}
        >
          Kosongkan
        </div>
        <div
          className="text-center rounded-full shadow-md shadow-gray-500 cursor-pointer bg-green-500 py-1 w-32 active:bg-green-400"
          onClick={() => addProduk()}
        >
          Tambah Produk
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="w-32 text-center rounded-full shadow-md shadow-gray-500 cursor-pointer bg-green-500 py-1 active:bg-green-400"
          onClick={() => !isProcessing && handleSubmit()}
          disabled={isProcessing}
        >
          {isProcessing ? <Spinner /> : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Listpesanan;
