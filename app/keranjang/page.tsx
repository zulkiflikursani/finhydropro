import Keranjang from "@/components/keranjang/Keranjang";
interface TypeProduk {
  kode_produk: string;
  nama_produk: string;
  company: string;
  deskripsi: string;
  harga_beli: string;
  harga_jual: string;
  final_stok: number;
}
interface PropsKeranjang {
  data: TypeProduk[];
}
export default function AboutPage() {
  return (
    <div className="w-full">
      <Keranjang />
    </div>
  );
}
