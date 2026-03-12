import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            <span>Copyright 2020 - Todos los derechos reservados - Diseno y desarrollo web: </span>
            <Link 
              href="https://businessgo.es" 
              target="_blank" 
              className="text-yellow-400 hover:text-yellow-300"
            >
              BusinessGo!
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/politica-de-cookies" className="hover:text-gray-300 transition-colors">
              Politica de Cookies
            </Link>
            <Link href="/proteccion-de-datos" className="hover:text-gray-300 transition-colors">
              Proteccion de datos
            </Link>
            <Link href="/aviso-legal" className="hover:text-gray-300 transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
