import { fetchProduct } from "../lib/product/data";
import ProductCard from "@/components/pricing/ProductCard";

export default async function PricingPage() {
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
