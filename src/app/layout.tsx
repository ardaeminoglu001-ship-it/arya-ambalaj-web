import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arya Ambalaj | Ankara Ambalaj ve Paketleme Toptancısı",
  description: "Ankara Hüseyingazi ve Karapürçek'in ilk ambalaj toptancısı Arya Ambalaj. Toptan ve perakende gıda, endüstriyel, ve lojistik paketleme çözümlerinde 15 yıllık güven.",
  keywords: [
    "Ankara ambalaj", 
    "toptan ambalaj Ankara", 
    "ambalaj toptancısı", 
    "Hüseyingazi ambalaj", 
    "Karapürçek ambalaj", 
    "paketleme çözümleri", 
    "gıda ambalajı", 
    "koli", 
    "poşet", 
    "kutu imalatı", 
    "toptan poşet"
  ],
  authors: [{ name: "Arya Ambalaj" }],
  openGraph: {
    title: "Arya Ambalaj | Ankara Ambalaj ve Paketleme Toptancısı",
    description: "15 yıllık güvenle Ankara'nın lider ambalaj ve paketleme tedarikçisi. Tüm gıda, sanayi ve kargo paketleme ihtiyaçlarınız tek çatı altında.",
    url: "https://aryaambalaj.com.tr", // Örnek domain
    siteName: "Arya Ambalaj",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
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
