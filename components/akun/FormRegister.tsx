"use client";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import createAkun from "../../app/lib/akun/action";

function FormRegister() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [nama, setNama] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    const result = await createAkun(formData);

    if (result.status === 500) {
      setError("An error occurred during registration.");
    } else if (result.status === 200) {
      setSuccess("Registration successful!");
      setNama("");
      setNamaPerusahaan("");
      setEmail("");
      setAlamat("");
      setNoTelepon("");
      setPassword("");
      setRepassword("");
    } else {
      setError("Unexpected error occurred.");
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <Input
          label="Nama Pemilik "
          name="nama"
          size="sm"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <Input
          label="Nama Perusahaan "
          name="nama_perusahaan"
          size="sm"
          type="text"
          value={namaPerusahaan}
          onChange={(e) => setNamaPerusahaan(e.target.value)}
        />
        <Input
          label="email"
          size="sm"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Alamat"
          size="sm"
          name="alamat"
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <Input
          label="No Telepon"
          size="sm"
          name="no_telepon"
          type="number"
          value={noTelepon}
          onChange={(e) => setNoTelepon(e.target.value)}
        />
        <Input
          label="Password"
          size="sm"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Konfirmasi Password"
          size="sm"
          name="repassword"
          type="password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button
          type="submit"
          className="bg-green-600 text-foreground-100 py-2 rounded-full shadow-md shadow-foreground-400 hover:bg-foreground-400 hover:text-foreground-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
