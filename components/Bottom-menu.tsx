"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { FaShopify, FaShoppingCart, FaAddressCard } from "react-icons/fa";

function BottomMenu() {
  const pathname = usePathname();
  return (
    <div className="fixed left-0 right-0 bottom-0 h-14 z-20 bg-green-600  ">
      <div className="flex justify-around items-center gap-0">
        <Link
          className={`text-center hover:bg-foreground-200 ${pathname === "/" ? "bg-foreground-100" : ""}`}
          href={"/"}
        >
          <div className=" w-full text-center  cursor-pointer p-2">
            <HiHome className=" h-6 w-20" />
            <div className="text-[10px] p-0 m-0">Dashboard</div>
          </div>
        </Link>
        <Link
          href={"/pricing"}
          className={`text-center hover:bg-foreground-200 ${pathname === "/pricing" ? "bg-foreground-100" : ""}`}
        >
          <div className=" w-full text-center  p-2  ">
            <FaShopify className="h-6 w-20 " />
            <div className="text-[10px] p-0 m-0">produk</div>
          </div>
        </Link>
        <Link
          href={"/keranjang"}
          className={`text-center hover:bg-foreground-200 ${pathname === "/keranjang" ? "bg-foreground-100" : ""}`}
        >
          <div className=" w-full text-center p-2">
            <FaShoppingCart className="h-6 w-20" />
            <div className="text-[10px] p-0 m-0"> Keranjang</div>
          </div>
        </Link>
        <Link
          href={"/profil"}
          className={`text-center hover:bg-foreground-200 ${pathname === "/profil" ? "bg-foreground-100" : ""}`}
        >
          <div className=" w-full text-center p-2">
            <FaAddressCard className="h-6 w-20" />
            <div className="text-[10px] p-0 m-0"> Akun</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomMenu;
