import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">Arya Ambalaj</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Ankara Hüseyingazi ve Karapürçek bölgesinin ilk ambalaj toptancısı. 15 yıllık tecrübemizle işletmenizin tüm paketleme ihtiyaçlarında güvenilir çözüm ortağınız.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/katalog" className="text-gray-400 hover:text-white transition-colors">Katalog / Ürünlerimiz</Link></li>
              <li><Link href="/#hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/#iletisim" className="text-gray-400 hover:text-white transition-colors">Bize Ulaşın</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Beşikkaya Mah. 1953. Sk. No:6<br/>06360 Altındağ / Ankara</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-400 shrink-0" />
                <a href="tel:05424434495" className="hover:text-white transition-colors">0542 443 44 95</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-400 shrink-0" />
                <a href="mailto:info@aryaambalaj.com" className="hover:text-white transition-colors">info@aryaambalaj.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Arya Ambalaj. Tüm hakları saklıdır.</p>
          <p>Bölgenin İlk ve En Köklü Toptancısı</p>
        </div>
      </div>
    </footer>
  );
}
