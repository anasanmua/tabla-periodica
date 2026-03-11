import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ComicInglesPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-8">
          Comic de la Tabla Periodica Ingles
        </h1>
        
        <div className="bg-gray-100 rounded-lg p-8 mb-6">
          <div className="w-full h-4 bg-gray-300 rounded mb-4">
            <div className="h-full bg-[#1a3a5c] rounded" style={{ width: "100%" }} />
          </div>
          <p className="text-gray-500 text-sm mb-6">Cargando...</p>
          
          <Button
            asChild
            className="bg-[#1a3a5c] hover:bg-[#2a4a6c] text-white"
          >
            <Link href="#" className="inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              DESCARGA AHORA!
            </Link>
          </Button>
          
          <p className="text-gray-500 text-sm mt-3">507 descargas</p>
        </div>
      </div>
    </div>
  )
}
