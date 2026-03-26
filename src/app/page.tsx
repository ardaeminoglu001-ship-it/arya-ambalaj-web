import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Truck, Box, Coffee, Phone, ArrowRight, Star, MapPin, Map, PackageOpen, Leaf, Zap, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20 bg-slate-50">
        
        {/* NEW HERO SECTION - Full height, cinematic */}
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-end pb-24 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
          {/* Subtle gradient overlay to ensure text readability without hiding the image */}
          <div className="absolute inset-0 bg-brand-navy/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-3xl bg-slate-900/60 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 border border-green-400/30 text-green-100 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4 text-green-400" />
                <span>Çevre Dostu Ambalaj Çözümleri</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Ambalajda <span className="text-green-400">15 Yıllık</span> <br/>
                Kök Salmış Güven
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
                Ankara Hüseyingazi ve Karapürçek'in ilk toptancısı. Gıda, endüstriyel ve lojistik paketlemede kalitenin adresi Arya Ambalaj.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#urunler" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 hover:scale-105">
                  Ürünleri Keşfet
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:05424434495" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
                  <Phone className="w-5 h-5" />
                  0542 443 44 95
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEW TRUST RIBBON - Sleek horizontal bar */}
        <section className="bg-brand-navy py-12 border-y border-white/10 relative z-20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              <div className="text-center px-4">
                <Award className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">15 Yıl</h4>
                <p className="text-blue-200 text-sm">Sektörel Tecrübe</p>
              </div>
              <div className="text-center px-4">
                <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">1. Sırada</h4>
                <p className="text-blue-200 text-sm">Bölgenin İlk Toptancısı</p>
              </div>
              <div className="text-center px-4">
                <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">Hızlı Teslimat</h4>
                <p className="text-blue-200 text-sm">Aynı Gün Sevkiyat</p>
              </div>
              <div className="text-center px-4">
                <ShieldCheck className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-xl mb-1">%100 Güven</h4>
                <p className="text-blue-200 text-sm">Memnuniyet Garantisi</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW BENTO GRID PRODUCTS SECTION */}
        <section id="urunler" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Kategorilerimiz</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">İhtiyacınıza Uygun Çözümler</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Bento Item 1: Large */}
              <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                <Coffee className="w-16 h-16 text-green-600 mb-8" />
                <h4 className="text-3xl font-bold text-slate-900 mb-4">Gıda Ambalajları</h4>
                <p className="text-gray-500 text-lg mb-8 max-w-md">Karton bardaklar, köpük tabaklar, sızdırmaz kaplar ve paket servis ürünleriyle restoran ve kafelerinizin güvenilir tedarikçisiyiz.</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {['Karton Bardaklar', 'Köpük Tabaklar', 'Sızdırmaz Kaplar', 'Çatal & Bıçak Setleri'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium"><div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Bento Item 2: Tall */}
              <div className="md:col-span-4 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all flex flex-col justify-between">
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
                <div>
                  <Box className="w-16 h-16 text-blue-400 mb-8" />
                  <h4 className="text-3xl font-bold mb-4">Endüstriyel</h4>
                  <p className="text-blue-100 text-lg mb-8">Üretim tesisleri ve fabrikalar için koli bantları ve palet streçleri.</p>
                </div>
                <ul className="space-y-4">
                  {['Koli Bantları', 'Palet Streç Filmler', 'Baloncuklu Naylon'].map((item, i) => (
                    <li key={i} className="flex items-center text-blue-50 font-medium border-b border-white/10 pb-3"><ArrowRight className="w-4 h-4 text-blue-400 mr-3"/>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Bento Item 3: Wide */}
              <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl transition-all">
                <div className="w-24 h-24 shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <PackageOpen className="w-12 h-12 text-brand-navy" />
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
              </div>
            </div>
          </div>
        </section>

        {/* NEW CONTACT SECTION - Minimalist sleek side-by-side */}
        <section id="iletisim" className="py-0">
          <div className="w-full flex flex-col lg:flex-row">
            
            {/* Left side: Maps/Info (dark) */}
            <div className="w-full lg:w-1/2 bg-slate-900 text-white flex flex-col justify-center px-8 py-24 lg:p-24 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
               <div className="relative z-10 max-w-lg lg:ml-auto">
                 <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ziyaret Edin</h2>
                 <p className="text-blue-200 text-lg mb-12">Hüseyingazi ve Karapürçek bölgesinin merkezinde, geniş ürün stoğumuzla sizi bekliyoruz.</p>
                 
                 <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Adres</h4>
                        <p className="text-xl font-medium">Karapürçek Mahallesi,<br/>Hüseyingazi, Altındağ / Ankara</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Direkt Hat & WhatsApp</h4>
                        <a href="tel:05424434495" className="text-xl font-medium hover:text-green-400 transition-colors">0542 443 44 95</a>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Right side: Modern Form */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 py-24 lg:p-24">
              <div className="max-w-lg lg:mr-auto">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Hızlı Sipariş & İletişim</h3>
                <p className="text-gray-500 mb-10">Toptan fiyat teklifi almak veya ihtiyacınızı iletmek için formu doldurun.</p>
                
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">İsim Soyisim</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 transition-all font-medium text-slate-900" placeholder="Adınız Soyadınız" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Telefon</label>
                    <input type="tel" className="w-full px-4 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 transition-all font-medium text-slate-900" placeholder="05XX XXX XX XX" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Ürün İhtiyacınız</label>
                    <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-green-500 transition-all font-medium text-slate-900 resize-none" placeholder="Almak istediğiniz ürünler veya mesajınız..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white px-6 py-5 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-xl shadow-slate-900/10 text-lg flex items-center justify-center gap-3">
                    Gönder <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/905424434495" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] hover:-translate-y-2 transition-all duration-300 z-50 flex items-center justify-center"
        title="WhatsApp ile İletişime Geçin"
      >
        <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M11.97 22c-1.57-.02-3.13-.38-4.57-1.07l-4.9 1.48 1.49-4.7A10.02 10.02 0 012 12A10.01 10.01 0 0112 2A10.01 10.01 0 0122 12A10.03 10.03 0 0111.97 22zm5.7-6.02c-.3-.15-1.84-.91-2.12-1.01-.28-.11-.47-.15-.67.15-.2.3-.8 1.01-.98 1.22-.18.2-.35.23-.65.08-.3-.15-1.31-.48-2.5-1.54-.93-.82-1.55-1.84-1.74-2.14-.18-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.59-.49-.5-.67-.5-.18-.02-.38-.02-.58-.02-.2 0-.52.08-.8.38-.28.3-.87.89-.87 2.18s.92 2.54 1.05 2.72c.13.18 1.84 2.82 4.47 3.96 1.95.84 2.37.96 3.25.9 1.1-.08 2.22-.64 2.52-1.25.3-.61.3-1.14.21-1.25-.09-.11-.27-.16-.57-.3z"></path>
        </svg>
      </a>

      <Footer />
    </>
  );
}
