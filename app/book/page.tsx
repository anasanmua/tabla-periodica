import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const bookPages = [
  { src: "/images/book/book-cover.jpg", alt: "El baile de los elementos - Portada" },
  { src: "/images/book/book-intro.jpg", alt: "Introduccion" },
  { src: "/images/book/book-page-1.jpg", alt: "Pagina del libro" },
  { src: "/images/book/book-li.jpg", alt: "Litio" },
  { src: "/images/book/book-b.jpg", alt: "Boro" },
  { src: "/images/book/book-c.jpg", alt: "Carbono" },
  { src: "/images/book/book-n.jpg", alt: "Nitrogeno" },
  { src: "/images/book/book-f.jpg", alt: "Fluor" },
  { src: "/images/book/book-p.jpg", alt: "Fosforo" },
  { src: "/images/book/book-s.jpg", alt: "Azufre" },
  { src: "/images/book/book-k.jpg", alt: "Potasio" },
  { src: "/images/book/book-ca.jpg", alt: "Calcio" },
  { src: "/images/book/book-fe.jpg", alt: "Hierro" },
  { src: "/images/book/book-ga.jpg", alt: "Galio" },
  { src: "/images/book/book-as.jpg", alt: "Arsenico" },
  { src: "/images/book/book-kr.jpg", alt: "Kripton" },
  { src: "/images/book/book-ag.jpg", alt: "Plata" },
  { src: "/images/book/book-cd.jpg", alt: "Cadmio" },
  { src: "/images/book/book-in.jpg", alt: "Indio" },
  { src: "/images/book/book-la.jpg", alt: "Lantano" },
  { src: "/images/book/book-lu.jpg", alt: "Lutecio" },
  { src: "/images/book/book-ta.jpg", alt: "Tantalio" },
  { src: "/images/book/book-au.jpg", alt: "Oro" },
  { src: "/images/book/book-hg.jpg", alt: "Mercurio" },
  { src: "/images/book/book-fr.jpg", alt: "Francio" },
  { src: "/images/book/book-u.jpg", alt: "Uranio" },
  { src: "/images/book/book-am.jpg", alt: "Americio" },
]

export default function BookPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          El libro de los elementos
        </h1>
        
        {/* Book pages grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {bookPages.map((page, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded bg-gray-100 shadow-sm"
            >
              <Image
                src={page.src}
                alt={page.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        
        {/* Download button */}
        <div className="text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary-hover text-white px-8"
          >
            <a href="/pdf/libro_de_los_elementos.pdf" className="inline-flex items-center gap-2" download>
              <Download className="w-4 h-4" />
              DESCARGAR LIBRO
            </a>
          </Button>
          <p className="text-gray-500 text-sm mt-3">2166 descargas</p>
        </div>
      </div>
    </div>
  )
}
