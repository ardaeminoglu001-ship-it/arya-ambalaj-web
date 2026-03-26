"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Box, Phone, ArrowRight, Star, MapPin, Leaf, Award } from "lucide-react";
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

              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Ambalajda <span className="text-green-400">15 Yıllık</span> <br/>
                Kök Salmış Güven
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
                Ankara&apos;nın kalbinde, Hüseyingazi ve Karapürçek bölgelerinin öncü toptancısı: Arya Ambalaj! 15 yıllık sarsılmaz tecrübemiz ve kaliteden ödün vermeyen anlayışımızla; gıda, endüstriyel, paketleme, süs ve pastacılık ambalajlarında aradığınız her şeyi tek çatı altında buluşturuyoruz.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/katalog" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 hover:scale-105">
                  Ürünleri Keşfet
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:05424434495" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                  <Phone className="w-5 h-5" />
                  0542 443 44 95
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURED PRODUCTS (Öne Çıkan Ürünlerimiz) */}
        <section className="py-24 bg-white relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Öne Çıkan Ürünlerimiz</h3>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Müşterilerimiz tarafından en çok tercih edilen ve kalitesiyle fark yaratan seçili ürünlerimiz.
              </p>
            </motion.div>

            {/* Placeholder / Empty State for Admin Panel Integration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-12 text-center max-w-3xl mx-auto shadow-sm"
            >
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-brand-red" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Öne Çıkan Ürünler Güncelleniyor</h4>
              <p className="text-gray-500 mb-8">
                Admin paneli üzerinden &quot;Öne Çıkar&quot; olarak işaretlenen ürünleriniz burada dinamik olarak listelenecektir.
              </p>
              <Link href="/katalog" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-red transition-colors shadow-lg shadow-red-900/20">
                Tüm Kataloğu İncele
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* NEW ABOUT US SECTION (Hakkımızda Text) */}
        <section id="hakkimizda" className="py-24 bg-[#F8F9FA] relative z-10 overflow-hidden">
          {/* Subtle Leaf watermark background (symbolizing the sycamore tree/çınar) */}
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] text-brand-red opacity-[0.03] pointer-events-none rotate-12">
            <Leaf className="w-full h-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-brand-red font-bold text-sm tracking-wide mb-6">
                  <Award className="w-4 h-4" /> KÖKLÜ GEÇMİŞ
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1A237E] leading-tight tracking-tight mb-4">
                  Hakkımızda
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-red mb-8">
                  15 Yıllık Güven, Bölgenin Kök Salan Çınarı
                </h3>
                
                <div className="space-y-6 text-[#333333] text-lg leading-relaxed font-light">
                  <p>
                    Ankara’nın dinamik bölgeleri <strong className="font-semibold text-[#1A237E]">Hüseyingazi ve Karapürçek’te</strong>, ambalaj sektörünün temellerini atan bölgenin <strong className="font-semibold text-brand-red">ilk</strong> poşetçisi ve ambalaj toptancısı olmanın gururunu taşıyoruz. 15 yıl önce, sadece bir ticarethane olarak değil, bölge esnafının ve sanayisinin güvenilir yol arkadaşı olma vizyonuyla yola çıktık.
                  </p>
                  <p>
                    Tıpkı ulu bir çınar ağacı gibi, yıllar içinde köklerimizi bu topraklara daha derinlemesine saldık. Gıda ambalajlarından endüstriyel çözümlere, estetik süs malzemelerinden profesyonel pastacılık çeşitlerine kadar uzanan geniş ürün yelpazemizle, kaliteden asla ödün vermedik.
                  </p>
                  <p>
                    Bizim için ambalaj; sadece bir ürünü sarmak değil, emeği korumak, markayı yüceltmek ve sunumu kusursuz kılmaktır. <strong className="font-semibold text-[#1A237E]">Arya Ambalaj</strong> adı, bugün <strong className="font-semibold text-green-600">15 yıllık tecrübenin</strong> getirdiği sağlamlık, dürüst ticaret ve sarsılmaz güven ile eşdeğerdir.
                  </p>
                  <p className="border-l-4 border-brand-red pl-6 italic text-[#1A237E] font-medium my-8">
                    Sizlerden aldığımız güçle, tecrübemizi modern çözümlerle birleştirerek, gelecekte de bölgenin en sağlam halkası olmaya devam edeceğiz.
                  </p>
                </div>
              </motion.div>

              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-6 relative"
              >
                {/* Image Placeholder representing Modern Warehouse / Rooted Trust */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-[8px] border-white">
                  <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                  <div className="w-full h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Leaf className="w-48 h-48 text-white/5 absolute -top-10 -right-10" />
                    <Box className="w-48 h-48 text-white/5 absolute -bottom-10 -left-10" />
                    
                    <div className="text-center px-8 relative z-20">
                      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-white text-3xl font-bold mb-2">Kurumsal<br/>Güvence</h3>
                      <p className="text-slate-300 font-light max-w-sm mx-auto">Kalite ve dürüstlükle yoğurulmuş 15 yıllık sarsılmaz tecrübe.</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative floating badge */}
                 <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4 z-20"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Bölgenin İlk Toptancısı</p>
                    <p className="text-2xl font-black text-slate-900">1 Numaralı Tercih</p>
                  </div>
                </motion.div>
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
                Google Haritalar&apos;da Aç
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
