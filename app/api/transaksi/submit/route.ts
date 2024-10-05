import { submitTransaksi } from "@/app/lib/penjualan/action";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {
  try {
    const { data }: any = req.body; // Get the data from the request body
    const result = await submitTransaksi(data); // Call submitTransaksi
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Error submitting transaksi:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
