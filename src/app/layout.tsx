import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
// const consolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
  keywords: "Next.js, typescript, tailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="m-0 p-0 ">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
