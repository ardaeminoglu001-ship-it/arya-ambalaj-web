import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arya Ambalaj | Ankara'nın Ambalaj Çözümlerinde 15 Yıllık Güven",
  description: "Ankara Hüseyingazi ve Karapürçek bölgesinin ilk ambalaj toptancısı. Gıda ambalajları, endüstriyel paketleme ve taşıma çözümlerinde profesyonel hizmet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen flex flex-col bg-brand-gray text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
