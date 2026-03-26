"use client";
import { PackageOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <PackageOpen className="w-8 h-8 text-brand-navy" strokeWidth={2.5} />
            <span className="font-bold text-2xl tracking-tight text-brand-navy">Arya Ambalaj</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#hakkimizda" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">Hakkımızda</a>
            <a href="#urunler" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">Ürünler</a>
            <a href="#iletisim" className="text-gray-600 hover:text-brand-navy font-medium transition-colors">İletişim</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:05424434495" className="font-semibold text-brand-navy">0542 443 44 95</a>
            <a href="#iletisim" className="bg-brand-navy text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
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
              <a href="#hakkimizda" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-navy font-medium">Hakkımızda</a>
              <a href="#urunler" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-navy font-medium">Ürünler</a>
              <a href="#iletisim" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-navy font-medium">İletişim</a>
              <a href="tel:05424434495" className="text-brand-navy font-bold py-2">0542 443 44 95</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
