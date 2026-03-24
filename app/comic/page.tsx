import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ComicPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Comic de la Tabla Periodica
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/comic/espanol">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  Comic en Espanol
                </h2>
                <p className="text-gray-600">
                  Version completa del comic en espanol
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/comic/ingles">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  Comic en Ingles
                </h2>
                <p className="text-gray-600">
                  English version of the comic
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
