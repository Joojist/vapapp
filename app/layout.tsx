import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vapapp",
  description: "Dani making da copy of vapiano",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image src={"/backGround.jpg"} alt="Logo" width={100} height={100} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
