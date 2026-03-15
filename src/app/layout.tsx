import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wenxin Li | Product Designer",
  description:
    "Wenxin is an award-winning product designer who designs next-gen smart screens. Portfolio showcasing B2C Fintech, B2B SaaS, and AI product design work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="page-transition">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
