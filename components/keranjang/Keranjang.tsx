import React from "react";
import Listpesanan from "./Listpesanan";

function Keranjang() {
  return (
    <div className=" w-full flex flex-col p-1 space-y-2">
      <h1 className="text-center font-bold text-lg">Keranjang</h1>
      <div className="text-foreground-700">
        <Listpesanan />
      </div>
    </div>
  );
}

export default Keranjang;
