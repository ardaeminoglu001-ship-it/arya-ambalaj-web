"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function Katalog() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-28 pb-20 bg-slate-50 min-h-screen">
        <section className="overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Ürün Kataloğumuz</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gıda, endüstriyel, paketleme, süs ve pastacılık ambalajlarında aradığınız her şeyi tek çatı altında buluşturuyoruz.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-3xl mx-auto"
            >
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <PackageSearch className="w-12 h-12 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Katalog Güncelleniyor</h3>
              <p className="text-gray-500 text-lg">
                Geniş ürün yelpazemiz çok yakında burada olacak. Detaylı bilgi ve siparişleriniz için bizimle iletişime geçebilirsiniz.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
