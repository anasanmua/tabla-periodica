"use client"
import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { Button } from "@/components/ui/button"

const articles = [
  {
    id: 1,
    title: "CARTA A LOS ELEMENTOS DE LA TABLA PERIODICA",
    excerpt: "Que tiene que ver el hierro con el lobo feroz? Y el mercurio con un sombrero gigante, el lantano con el fantasma de la opera y el lutecio con Paris? La relacion del indio con un piel roja y del...",
    date: "29 mayo, 2019",
    category: "Prensa",
    source: "US Quimica",
    publicId: "tabla_sentados_3_vzxebc",
    hrf: "dossier-de-prensa/carta-a-los-elementos-de-la-tabla-periodica"
  },
  {
    id: 2,
    title: "ESTUDIANTES DE QUIMICA DE LA US CELEBRAN UN 'DESFILE DE LOS ELEMENTOS' EN LA CASA DE LA CIENCIA DE SEVILLA",
    excerpt: "Estudiantes de la Facultad de Quimica de la Universidad de Sevilla han celebrado un 'Desfile de los elementos' en la Casa de la Ciencia de Sevilla - centro de divulgacion del...",
    date: "24 mayo, 2019",
    category: "Prensa",
    source: "US Quimica",
    publicId: "15_p3-scaled_d0x2on",
    hrf: "dossier-de-prensa/estudiantes-de-quimica-de-la-us-celebran-un-desfile-de-los-elementos-en-la-casa-de-la-ciencia-de-sevilla"
  },
  {
    id: 3,
    title: "ESTUDIANTES DE LA US CELEBRAN UN 'DESFILE DE LOS ELEMENTOS' EN LA CASA DE LA CIENCIA",
    excerpt: "Redaccion. La Casa de la Ciencia de Sevilla, centro de divulgacion del Consejo Superior de Investigaciones Cientificas (CSIC), que cuenta con la colaboracion de la Consejeria de Economia...",
    date: "24 mayo, 2019",
    category: "Prensa",
    source: "US Quimica",
    publicId: "33_as-scaled_mvh770",
    hrf: "dossier-de-prensa/estudiantes-de-la-us-celebran-un-desfile-de-los-elementos-en-la-casa-de-la-ciencia"
  },
  {
    id: 4,
    title: "'DESFILE DE LOS ELEMENTOS' DE LOS ESTUDIANTES DE QUIMICA",
    excerpt: "La Universidad de Sevilla (US) y la Casa de la Ciencia de Sevilla, centro de divulgacion del Consejo Superior de Investigaciones Cientificas (CSIC), conmemoran el 150 aniversario de la creacion...",
    date: "23 mayo, 2019",
    category: "Prensa",
    source: "US Quimica",
    publicId: "mg_9669-scaled_t2utur",
    hrf: "dossier-de-prensa/desfile-de-los-elementos-de-los-estudiantes-de-quimica"
  },
]

export default function DossierPrensaPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Dossier de prensa
        </h1>
        
        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="overflow-hidden rounded aspect-[4/3]">
                  <CldImage
                    src={article.publicId}
                    alt={article.title}
                    width={400}
                    height={300}
                    crop="fill"
                    gravity="auto"
                    quality="auto"
                    format="auto"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="text-primary font-medium">{article.source}</span>
                  <span>/</span>
                  <span>{article.category}</span>
                  <span>/</span>
                  <span>{article.date}</span>
                </div>
                
                <h2 className="text-lg font-bold text-primary mb-3 leading-tight">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link href={article.hrf}>LEER MAS</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
