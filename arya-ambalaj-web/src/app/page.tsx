import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Truck, Box, Coffee, Phone, ArrowRight, Star, MapPin, Map } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-brand-navy min-h-[600px] flex items-center">
          {/* Background Pattern / Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                  <span>Bölgenin İlk ve En Köklü Toptancısı</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Ankara'nın <br className="hidden md:block" />
                  <span className="text-blue-400">Ambalaj Çözümlerinde</span> <br className="hidden md:block"/>
                  15 Yıllık Güven: <span className="text-white">Arya Ambalaj</span>
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
                  Karapürçek ve Hüseyingazi'nin ambalaj ihtiyaçlarına profesyonel çözümler sunuyoruz. Gıda, endüstriyel ve taşıma ambalajlarında lider adres.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#urunler" className="bg-white text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-xl">
                    Ürünlerimizi İnceleyin
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="tel:05424434495" className="bg-blue-800 text-white border border-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Hemen Arayın
                  </a>
                </div>
              </div>

              {/* Decorative element right side for hero */}
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="glass-panel p-8 rounded-2xl border-white/10 shadow-2xl relative bg-white/5 mx-auto max-w-sm">
                   <div className="grid grid-cols-2 gap-4">
                      {[ 
                        { icon: Coffee, title: 'Karton Bardak', color: 'text-amber-400' },
                        { icon: Box, title: 'Köpük Tabak', color: 'text-white' },
                        { icon: Truck, title: 'Koli Bandı', color: 'text-blue-300' },
                        { icon: ShieldCheck, title: 'Streç Film', color: 'text-green-400' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-all">
                          <item.icon className={`w-10 h-10 mx-auto mb-3 ${item.color}`} />
                          <div className="text-sm font-medium text-white">{item.title}</div>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-6 bg-blue-600/50 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 shadow-inner">
                      <p className="text-white font-semibold text-lg">Yüzlerce Çeşit Ürün</p>
                      <p className="text-blue-200 text-sm">Toptan Fiyat Avantajıyla</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST FACTORS SECTION */}
        <section id="hakkimizda" className="py-16 bg-white border-b border-gray-100 relative -mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative bg-white">
               <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                 <div className="p-4">
                   <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
                     <ShieldCheck className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-800 mb-2">15 Yıllık Tecrübe</h3>
                   <p className="text-gray-500">Sektördeki köklü geçmişimizle güvenilir hizmet ve dürüst ticaret anlayışı.</p>
                 </div>
                 
                 <div className="p-4 pt-8 md:pt-4">
                   <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 -rotate-3">
                     <Star className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-800 mb-2">Bölge Lideri</h3>
                   <p className="text-gray-500">Hüseyingazi ve Karapürçek'te ilk toptancı olmanın gururuyla çalışıyoruz.</p>
                 </div>
                 
                 <div className="p-4 pt-8 md:pt-4">
                   <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
                     <Truck className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-800 mb-2">Hızlı Teslimat</h3>
                   <p className="text-gray-500">İşletmenizin işleyişini aksatmadan zamanında ve eksiksiz ürün tedariği.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="urunler" className="py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Kapsamlı Ürün Gruplarımız</h2>
              <p className="text-lg text-gray-600">
                Tüm ambalaj ihtiyaçlarınızı tek noktadan, uygun fiyatlarla karşılamak için zengin ürün yelpazemizle hizmetinizdeyiz.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-blue-50 p-10 flex justify-center items-center group-hover:bg-blue-100 transition-colors">
                  <Coffee className="w-24 h-24 text-brand-navy stroke-[1.5]" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Gıda Ambalajları</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Köpük tabaklar, sızdırmaz kaplar, karton ve plastik bardaklar, sıcak-soğuk gıda paketleme ürünleri.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Köpük Tabak ve Kaplar', 'Karton Bardak Çeşitleri', 'Plastik ve Sızdırmazlar', 'Çatal, Kaşık ve Kürdan'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div> {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#iletisim" className="text-brand-navy font-semibold inline-flex items-center hover:text-blue-600 transition-colors">
                    Sipariş Ver <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-slate-50 p-10 flex justify-center items-center group-hover:bg-slate-100 transition-colors">
                  <Box className="w-24 h-24 text-slate-700 stroke-[1.5]" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Endüstriyel Paketleme</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Üretim ve sevkiyat süreçleriniz için gerekli olan her türlü sağlam ve dayanıklı paketleme malzemesi.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Baskılı/Baskısız Bantlar', 'Endüstriyel Streç', 'Baloncuklu Naylon', 'Çemberleme Çözümleri'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-2"></div> {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#iletisim" className="text-slate-700 font-semibold inline-flex items-center hover:text-slate-900 transition-colors">
                    Sipariş Ver <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-t-4 border-t-brand-navy group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-blue-50 p-10 flex justify-center items-center group-hover:bg-blue-100 transition-colors">
                  <PackageOpen className="w-24 h-24 text-blue-600 stroke-[1.5]" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Taşıma ve Poşet Çözümleri</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Mağazalar ve toptan alıcılar için dayanıklı atlet poşetler, kargo poşetleri ve çöp torbaları.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Atlet Poşet Çeşitleri', 'Baskılı Mağaza Poşeti', 'Kalın/İnce Çöp Torbası', 'Kargo/Kurye Poşetleri'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div> {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#iletisim" className="text-brand-navy font-semibold inline-flex items-center hover:text-blue-700 transition-colors">
                    Sipariş Ver <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & CONTACT SECTION */}
        <section id="iletisim" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bizimle İletişime Geçin</h2>
                  <p className="text-gray-500 text-lg">Hızlı destek ve toptan siparişleriniz için aşağıdaki formu doldurabilir veya WhatsApp üzerinden yazabilirsiniz.</p>
                </div>

                <form className="space-y-6 bg-brand-gray p-8 rounded-2xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">İsim Soyisim</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-white" placeholder="Kemal Yılmaz" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Telefon</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-white" placeholder="05XX XXX XX XX" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Firma Adı (Opsiyonel)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-white" placeholder="İşletmeniz Ltd. Şti." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Mesajınız / İhtiyaç Listeniz</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow bg-white" placeholder="Almak istediğiniz ürünleri veya sorularınızı yazın..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-navy text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                    Mesajı Gönder
                  </button>
                </form>
              </div>

              {/* Map & Info */}
              <div className="flex flex-col">
                <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex-grow flex flex-col relative text-white">
                  
                  <div className="p-10 flex-grow z-10 relative">
                    <h3 className="text-2xl font-bold mb-8">Mağazamızı Ziyaret Edin</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Adresimiz</h4>
                          <p className="text-blue-100">Karapürçek Mahallesi, <br />Hüseyingazi, Altındağ / Ankara</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                          <Phone className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Telefon & WhatsApp</h4>
                          <a href="tel:05424434495" className="text-white hover:text-blue-300 font-bold block text-xl">0542 443 44 95</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Map Container block */}
                  <div className="h-64 bg-slate-800 relative z-0">
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500 bg-slate-800 p-6 text-center">
                      <Map className="w-12 h-12 mb-3 text-slate-600" />
                      <p>Google Maps Entegrasyonu Karapürçek Lokasyonu</p>
                    </div>
                  </div>
                </div>
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
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba59] hover:-translate-y-1 transition-all z-50 flex items-center justify-center ring-4 ring-green-500/30"
        title="WhatsApp ile Sipariş Ver"
      >
        <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M11.97 22c-1.57-.02-3.13-.38-4.57-1.07l-4.9 1.48 1.49-4.7A10.02 10.02 0 012 12A10.01 10.01 0 0112 2A10.01 10.01 0 0122 12A10.03 10.03 0 0111.97 22zm5.7-6.02c-.3-.15-1.84-.91-2.12-1.01-.28-.11-.47-.15-.67.15-.2.3-.8 1.01-.98 1.22-.18.2-.35.23-.65.08-.3-.15-1.31-.48-2.5-1.54-.93-.82-1.55-1.84-1.74-2.14-.18-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.59-.49-.5-.67-.5-.18-.02-.38-.02-.58-.02-.2 0-.52.08-.8.38-.28.3-.87.89-.87 2.18s.92 2.54 1.05 2.72c.13.18 1.84 2.82 4.47 3.96 1.95.84 2.37.96 3.25.9 1.1-.08 2.22-.64 2.52-1.25.3-.61.3-1.14.21-1.25-.09-.11-.27-.16-.57-.3z"></path>
        </svg>
      </a>

      <Footer />
    </>
  );
}
