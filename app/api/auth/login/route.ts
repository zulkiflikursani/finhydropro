import { PrismaClient } from "@prisma/client";
import { signIn } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import bcrypt, { hash } from "bcrypt";
import React from "react";

interface ReqType {
  email: string;
  password: string;
}
export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  try {
    // Extract email and password from the request body
    const { email, password }: ReqType = await req.json();
    // Query the user from the database by email
    console.log("Received email:", email);
    console.log("Received password:", password); // Avoid logging actual passwords in production

    const user = await prisma.tb_user_customer.findFirst({
      where: {
        email: email,
      },
    });
    console.log("Found user:", user);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // // Compare provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Is password valid?", isPasswordValid);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // If authentication is successful, return user data
    return NextResponse.json(user);
    // return NextResponse.json({ email, password });
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
