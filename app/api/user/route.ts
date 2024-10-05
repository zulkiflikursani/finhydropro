import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();
  try {
    const hasPassword = await hash("777888", 10);
    const res = await prisma.tb_user_customer.create({
      data: {
        nama: "zulkifli",
        email: "zulkifli@gmail.com",
        level: 1,
        customer_company: "1",
        password: hasPassword,
        no_telpon: "9082734981274",
        alamat: "ajkdhfkajsh",
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
