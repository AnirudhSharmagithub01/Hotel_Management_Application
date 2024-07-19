import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Models from "./components/models/Models";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KingHotel",
  description: "King Hotel is Popular for its Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Models isOpen={true} />
          <Navbar/>
        </ClientOnly>
        {children}
      </body>

    </html>
  );
}
