import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function MultimediaPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Multimedia
        </h1>
        
        <div className="max-w-md mx-auto">
          <Link href="/multimedia/posters-alumnado-2020-2021">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  Posters Alumnado 2020/2021
                </h2>
                <p className="text-gray-600">
                  Posters y presentaciones del alumnado
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
