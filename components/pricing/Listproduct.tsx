import React from "react";

import ProductCard from "./ProductCard";
import { fetchProduct } from "@/app/lib/product/data";
async function Listproduct() {
  const produk = await fetchProduct("");
  if (produk instanceof Error) {
    return <div>Error: {produk.message}</div>; // Display error message
  }

  return (
    <div className="flex">
      <ProductCard produk={produk?.data} />
    </div>
  );
}

export default Listproduct;
