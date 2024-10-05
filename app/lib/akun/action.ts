import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export default async function creatAkun(formdata: FormData) {
  console.log(formdata);
  const hashedPassword = await bcrypt.hash(
    formdata.get("password") as string,
    10
  );

  if (
    !formdata.get("email") ||
    !formdata.get("password") ||
    !formdata.get("nama") ||
    !formdata.get("nama_perusahaan") ||
    !formdata.get("alamat")
  ) {
    return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
  }

  try {
    const data = {
      nama: formdata.get("nama") as string,
      email: formdata.get("email") as string,
      level: 1,
      customer_company: formdata.get("nama_perusahaan") as string, // Assuming an empty string is acceptable for now
      password: hashedPassword,
      no_telpon: formdata.get("no_telepon") as string,
      alamat: formdata.get("alamat") as string,
    };
    console.log(data);
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json({
      message: "User created successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user", status: 500 });
  }
}
