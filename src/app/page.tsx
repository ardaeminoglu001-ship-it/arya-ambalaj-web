"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Truck, Box, Coffee, Phone, ArrowRight, Star, MapPin, Map, PackageOpen, Leaf, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20 bg-slate-50">
        
        {/* NEW HERO SECTION - Full height, cinematic */}
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-end pb-24 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
          {/* Subtle gradient overlay to ensure text readability without hiding the image */}
          <div className="absolute inset-0 bg-brand-red/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl bg-slate-900/60 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 border border-green-400/30 text-green-100 text-sm font-medium mb-6"
              >
                <Leaf className="w-4 h-4 text-green-400" />
                <span>Çevre Dostu Ambalaj Çözümleri</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Ambalajda <span className="text-green-400">15 Yıllık</span> <br/>
                Kök Salmış Güven
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
                Ankara Hüseyingazi ve Karapürçek'in ilk toptancısı. Gıda, endüstriyel ve lojistik paketlemede kalitenin adresi Arya Ambalaj.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#urunler" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 hover:scale-105">
                  Ürünleri Keşfet
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:05424434495" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                  <Phone className="w-5 h-5" />
                  0542 443 44 95
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* NEW TRUST RIBBON - Sleek horizontal bar */}
        <section className="bg-brand-red py-12 border-y border-white/10 relative z-20 shadow-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center px-4"
              >
                <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">15 Yıl</h4>
                <p className="text-red-200 text-sm">Sektörel Tecrübe</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center px-4"
              >
                <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">1. Sırada</h4>
                <p className="text-red-200 text-sm">Bölgenin İlk Toptancısı</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center px-4"
              >
                <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">Hızlı Teslimat</h4>
                <p className="text-red-200 text-sm">Aynı Gün Sevkiyat</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center px-4"
              >
                <ShieldCheck className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">%100 Güven</h4>
                <p className="text-red-200 text-sm">Memnuniyet Garantisi</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* NEW BENTO GRID PRODUCTS SECTION */}
        <section id="urunler" className="py-24 sm:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Kategorilerimiz</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">İhtiyacınıza Uygun Çözümler</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Bento Item 1: Large */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="md:col-span-4 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/20 blur-3xl rounded-full"></div>
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
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 shrink-0 bg-red-50 rounded-2xl flex items-center justify-center">
                  <PackageOpen className="w-12 h-12 text-brand-red" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">Mağaza ve Taşıma Çözümleri</h4>
                  <p className="text-gray-500 text-lg mb-6">Market atlet poşetleri, e-ticaret kurye poşetleri, ve mağaza çantaları ile perakende ihtiyaçlarınızı karşılıyoruz.</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {['Baskılı Atlet Poşet', 'Kargo Poşetleri', 'Kalın Çöp Torbaları', 'Mağaza Çantaları'].map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEW CONTACT SECTION - Minimalist sleek side-by-side */}
        <section id="iletisim" className="py-0 overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row">
            
            {/* Left side: Maps/Info (dark) */}
            <div className="w-full lg:w-1/2 bg-slate-900 text-white flex flex-col justify-center px-8 py-24 lg:p-24 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400 via-transparent to-transparent"></div>
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6 }}
                 className="relative z-10 max-w-lg lg:ml-auto"
               >
                 <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ziyaret Edin</h2>
                 <p className="text-red-200 text-lg mb-12">Hüseyingazi ve Karapürçek bölgesinin merkezinde, geniş ürün stoğumuzla sizi bekliyoruz.</p>
                 
                 <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-red-300 font-bold mb-1">Adres</h4>
                        <p className="text-xl font-medium">Beşikkaya Mah. 1953. Sk. No:6,<br/>06360 Altındağ / Ankara</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-red-300 font-bold mb-1">Direkt Hat & WhatsApp</h4>
                        <a href="tel:05424434495" className="text-xl font-medium hover:text-green-400 transition-colors">0542 443 44 95</a>
                      </div>
                    </div>
                 </div>
               </motion.div>
            </div>

            {/* Right side: Interactive Map */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 bg-white relative min-h-[400px] lg:min-h-full"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Be%C5%9Fikkaya%2C%201953.%20Sk.%20No%3A6%2C%2006360%20Alt%C4%B1nda%C4%9F%2FAnkara&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Arya Ambalaj Konum"
              ></iframe>
              <motion.a 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                href="https://share.google/R0jRjqpav9hLZB8ol" 
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-green-600 transition-colors flex items-center gap-3 z-10 whitespace-nowrap"
              >
                <MapPin className="w-5 h-5" />
                Google Haritalar'da Aç
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
