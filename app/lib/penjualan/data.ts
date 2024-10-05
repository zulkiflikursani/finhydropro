import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import React from "react";

export const getDataPenjualan = async () => {
  const session = await getServerSession(authOptions);
  const prisma = new PrismaClient();
  try {
    const data = await prisma.tb_transaksi_header.findMany({
      where: {
        user: session?.user.email,
      },
    });

    if (data) {
      return {
        status: 200,
        data: data,
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: error,
    };
  }
};
