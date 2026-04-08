import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            <span>Copyright 2026 - Todos los derechos reservados - Diseno y desarrollo web: </span>
            <Link 
              href="https://github.com/anasanmua"
              target="_blank" 
              className="text-yellow-400 hover:text-yellow-300"
            >
              Ana Sánchez Muñoz
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-cookies" className="whitespace-nowrap hover:text-gray-300 transition-colors">
              Politica de Cookies
            </Link>
            <Link href="/proteccion-de-datos" className="whitespace-nowrap hover:text-gray-300 transition-colors">
              Proteccion de datos
            </Link>
            <Link href="/aviso-legal" className="whitespace-nowrap hover:text-gray-300 transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
