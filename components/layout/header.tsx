"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu, X, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "/" },
  { 
    name: "Quienes", 
    href: "/quienes",
    submenu: [
      { name: "Profesorado Quimica Inorganica", href: "/quienes/profesorado" },
      { name: "Alumnado Facultad de Quimica", href: "/quienes/alumnado" },
    ]
  },
  { name: "Book", href: "/book" },
  { 
    name: "Videos", 
    href: "/videos",
    submenu: [
      { name: "Un Desfile Con Mucha Quimica", href: "/videos/un-desfile-con-mucha-quimica" },
      { name: "La, Ca, Ta, Am, Fr Y Ag", href: "/videos/la-ca-ta-am-fr-y-ag" },
    ]
  },
  { 
    name: "Comic", 
    href: "/comic",
    submenu: [
      { name: "Comic De La Tabla Periodica Espanol", href: "/comic/espanol" },
      { name: "Comic De La Tabla Periodica Ingles", href: "/comic/ingles" },
    ]
  },
  { 
    name: "Multimedia", 
    href: "/multimedia",
    submenu: [
      { name: "Posters Alumnado 2020/2021", href: "/multimedia/posters-alumnado-2020-2021" },
    ]
  },
  { name: "Dossier de prensa", href: "/dossier-de-prensa" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1a3a5c] text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>marzo 11, 2026</span>
            <span>150 Aniversario de la Tabla Periodica</span>
          </div>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            className="hover:text-gray-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Logo section */}
      <div className="bg-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 flex-wrap">
          <Link href="https://www.us.es" target="_blank" className="flex-shrink-0">
            <Image
              src="/images/logos/universidad-sevilla.jpg"
              alt="Universidad de Sevilla"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          <Link href="https://www.ciencia.gob.es" target="_blank" className="flex-shrink-0">
            <Image
              src="/images/logos/gobierno-espana.jpg"
              alt="Gobierno de Espana - Ministerio de Ciencia"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <Link href="https://www.csic.es" target="_blank" className="flex-shrink-0">
            <Image
              src="/images/logos/csic.jpg"
              alt="CSIC"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="https://www.fecyt.es" target="_blank" className="flex-shrink-0">
            <Image
              src="/images/logos/fecyt.jpg"
              alt="FECYT"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors",
                    "text-gray-700 hover:bg-[#1a3a5c] hover:text-white",
                    "group-hover:bg-[#1a3a5c] group-hover:text-white"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.submenu && openSubmenu === item.name && (
                  <div className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 min-w-[220px] z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1a3a5c]"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex justify-between items-center py-3">
            <span className="text-sm font-medium text-gray-700">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded"
              aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </span>
                </Link>
                {item.submenu && (
                  <div className="bg-gray-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
