"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Coffee, Box, ArrowRight, PackageOpen } from "lucide-react";
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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Bento Item 1: Large */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <Coffee className="w-16 h-16 text-green-600 mb-8" />
                <h4 className="text-3xl font-bold text-slate-900 mb-4">Gıda Ambalajları</h4>
                <p className="text-gray-500 text-lg mb-8 max-w-md">Karton bardaklar, köpük tabaklar, sızdırmaz kaplar ve paket servis ürünleriyle restoran ve kafelerinizin güvenilir tedarikçisiyiz.</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {['Karton Bardaklar', 'Köpük Tabaklar', 'Sızdırmaz Kaplar', 'Çatal & Bıçak Setleri'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>{item}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Bento Item 2: Tall */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="md:col-span-4 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-red/20 blur-3xl rounded-full"></div>
                <div>
                  <Box className="w-16 h-16 text-red-400 mb-8" />
                  <h4 className="text-3xl font-bold mb-4">Endüstriyel</h4>
                  <p className="text-red-100 text-lg mb-8">Üretim tesisleri ve fabrikalar için koli bantları ve palet streçleri.</p>
                </div>
                <ul className="space-y-4">
                  {['Koli Bantları', 'Palet Streç Filmler', 'Baloncuklu Naylon'].map((item, i) => (
                    <li key={i} className="flex items-center text-red-50 font-medium border-b border-white/10 pb-3"><ArrowRight className="w-4 h-4 text-red-400 mr-3"/>{item}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Bento Item 3: Wide */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 shrink-0 bg-red-50 rounded-2xl flex items-center justify-center">
                  <PackageOpen className="w-12 h-12 text-brand-red" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">Mağaza ve Taşıma Çözümleri</h4>
                  <p className="text-gray-500 text-lg mb-6">Market atlet poşetleri, e-ticaret kurye poşetleri, ve mağaza çantaları ile perakende ihtiyaçlarınızı karşılıyoruz.</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {['Baskılı Atlet Poşet', 'Kargo Poşetleri', 'Kalın Çöp Torbaları', 'Mağaza Çantaları', 'Süs ve Pastacılık Ambalajları'].map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
