"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-brand-red">Arya Ambalaj</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-brand-red font-medium transition-colors">Ana Sayfa</Link>
            <a href="/#hakkimizda" className="text-gray-600 hover:text-brand-red font-medium transition-colors">Hakkımızda</a>
            <Link href="/katalog" className="text-gray-600 hover:text-brand-red font-medium transition-colors">Katalog / Ürünlerimiz</Link>
            <a href="/#iletisim" className="text-gray-600 hover:text-brand-red font-medium transition-colors">İletişim</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:05424434495" className="font-semibold text-brand-red">0542 443 44 95</a>
            <a href="https://wa.me/905424434495" target="_blank" rel="noreferrer" className="bg-brand-red text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-600 transition-colors shadow-lg shadow-red-900/20">
              Fiyat Teklifi Al
            </a>
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-red font-medium">Ana Sayfa</Link>
              <a href="/#hakkimizda" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-red font-medium">Hakkımızda</a>
              <Link href="/katalog" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-red font-medium">Katalog / Ürünlerimiz</Link>
              <a href="/#iletisim" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-red font-medium">İletişim</a>
              <a href="tel:05424434495" className="text-brand-red font-bold py-2">0542 443 44 95</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
