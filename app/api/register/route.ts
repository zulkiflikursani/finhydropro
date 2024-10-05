import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const data = await req.json();
  console.log(data);
  try {
    const user = await prisma.tb_user_customer.create({
      data: {
        nama: data.nama,
        email: data.email,
        password: data.password,
        level: 2,
        no_telpon: data.no_telpon,
        alamat: data.alamat,
        customer_company: data.customer_company,
      },
    });

    if (user) {
      return NextResponse.json({ message: "Register berhasil" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Register gagal" });
  }
}
