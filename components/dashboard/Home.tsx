import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";

import { siteConfig } from "../../config/site";
import { title, subtitle } from "@/components/primitives";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { signIn, signOut } from "next-auth/react";
import InViewSection from "@/components/InViewSection";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import React from "react";

export default async function Dashboards() {
  const data = await getServerSession(authOptions);
  return (
    <>
      {/* <InViewSection /> */}
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4 ">
            <div
              className={`${``} flex p-2 justify-center items-center  gap-1 `}
            >
              <span className={`font-black text-green-600 ${``}`}>FH</span>
              <h4
                className={`${``} text-foreground-800 font-bold tracking-tighter`}
              >
                FindHydroPro
              </h4>
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <Input name="search" placeholder="Cari barang ..." />
        </NavbarContent>
      </Navbar>
      <motion.section
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen -mt-20 bg-sectionOne bg-cover bg-repeat backdrop-blur-2lg"
      >
        <section className="inline-block max-w-xl text-center justify-center ">
          <h1
            className={title({
              class: "text-stroke-black",
            })}
          >
            Transformasi Pertanian <br />
            di Kabupaten Pangkep dengan
          </h1>
          <h1
            className={title({
              color: "orange",
              class: "drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]",
            })}
          >
            Teknologi Cerdas dan Inovasi
          </h1>
          <br />
          {/* <h1 className={title()}>
            websites regardless of your design experience.
          </h1> */}
          <h2
            className={subtitle({
              class:
                "mt-4 text-white text-stroke-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
            })}
          >
            FindHydroPro Smart Farming 4.0
          </h2>
        </section>

        <div className="flex gap-3">
          {data?.user ? (
            <Button className="rounded-full" onClick={() => signOut()}>
              log out{" "}
            </Button>
          ) : (
            <Button className="rounded-full" onClick={() => signIn()}>
              Login
            </Button>
          )}

          <Link
            className="bg-green-600 py-2 rounded-full text-foreground-100 px-4 shadow-md shadow-foreground-400 hover:bg-foreground-400 hover:text-foreground-800"
            href={siteConfig.links.product}
          >
            Produk
          </Link>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="flex flex-col items-center bg-repeat bg-cover bg-sectionThree text-center justify-center bg-center gap-4 py-8 min-h-screen bg-foreground-200"
      >
        <div className="m-0 backdrop-blur-sm bg-green-500 ">
          <div className="container mx-auto">
            <p className=" ">
              Selamat datang di{" "}
              <span className="font-bold">FinHydroPro Smart Farming 4.0</span>,
              platform inovatif yang membawa pertanian hidroponik dan
              digitalisasi keuangan ke masa depan. Di sini, kami memberdayakan
              masyarakat Kabupaten Pangkep dengan solusi pertanian modern
              berbasis teknologi{" "}
              <span className="font-bold">Internet of Things (IoT)</span> dan{" "}
              <span className="font-bold">FinTech</span> untuk menciptakan
              ekosistem pertanian yang lebih efisien, berkelanjutan, dan
              menguntungkan. <br />
              <br />
              Melalui program ini, wirausaha di 4 desa dan Balai Latihan Kerja
              (BLK) mendapatkan dukungan penuh untuk menjalankan bisnis
              pertanian hidroponik, dengan akses ke alat-alat digital canggih
              yang membantu memonitor tanaman sekaligus mengelola keuangan
              mereka dengan mudah dan aman.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="bg-foreground-100 text-center p-2 min-h-screen bg-sectionTwo bg-repeat bg-cover bg-center  flex items-center"
      >
        <div className=" font-extrabold container mx-auto -mt-10 text-white  md:text-[30px] backdrop-blur-sm text-stroke-black py-2">
          Menyemai Inovasi di Pertanian Hidroponik Di Kabupaten Pangkep, kami
          percaya bahwa masa depan pertanian adalah teknologi. Program
          FinHydroPro mendukung petani lokal untuk mengembangkan tanaman
          hidroponik berkualitas tinggi dengan bantuan teknologi IoT. Dari
          pemantauan kelembaban hingga nutrisi, semua terhubung dalam satu
          sistem cerdas yang memastikan hasil panen yang optimal.
        </div>
      </motion.section>
    </>
  );
}