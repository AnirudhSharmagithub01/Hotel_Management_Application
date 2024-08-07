import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/models/RegisterModal";
import ToastProvider from "./providers/ToasterProvider";
import LoginModal from "./components/models/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/models/RentModal";
import Map from "./components/Map";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KingHotel",
  description: "King Hotel is Popular for its Services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToastProvider/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          {/* <Container>
          <Map select={true}/>
          </Container> */}
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}
        </div>
      </body>

    </html>
  );
}
