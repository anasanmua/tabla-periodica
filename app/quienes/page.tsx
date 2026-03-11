import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function QuienesPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Quienes Somos
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/quienes/profesorado">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-[#1a3a5c] mb-2">
                  Profesorado Quimica Inorganica
                </h2>
                <p className="text-gray-600">
                  Conoce al equipo de profesores que hicieron posible este proyecto
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/quienes/alumnado">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-[#1a3a5c] mb-2">
                  Alumnado Facultad de Quimica
                </h2>
                <p className="text-gray-600">
                  Los estudiantes que dieron vida a los elementos
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
