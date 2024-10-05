import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nama, email, level, customer_company, no_telepon, alamat, password } =
    await req.json();
  const prisma = new PrismaClient();
  try {
    // const hasPassword = await hash("777888", 10);
    const res = await prisma.tb_user_customer.create({
      data: {
        nama: nama,
        email: email,
        level: 1,
        customer_company: customer_company,
        password: password,
        no_telpon: no_telepon,
        alamat: alamat,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
