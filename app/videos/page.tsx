import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function VideosPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Videos
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/videos/un-desfile-con-mucha-quimica">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-[#1a3a5c] mb-2">
                  Un Desfile Con Mucha Quimica
                </h2>
                <p className="text-gray-600">
                  Video resumen del desfile de los elementos
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/videos/la-ca-ta-am-fr-y-ag">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-[#1a3a5c] mb-2">
                  La, Ca, Ta, Am, Fr Y Ag
                </h2>
                <p className="text-gray-600">
                  Videos monograficos de elementos quimicos
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
