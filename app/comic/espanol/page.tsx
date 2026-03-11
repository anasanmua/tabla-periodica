import { ComicGrid } from "@/components/comic/comic-grid"

// Elementos del comic con sus simbolos
const comicElements = [
  { symbol: "Portada", name: "Introduccion", image: "/images/comic/comic-portada.jpg" },
  { symbol: "FECYT", name: "Creditos", image: "/images/comic/comic-creditos.jpg" },
  { symbol: "Intro", name: "Tabla Periodica", image: "/images/comic/comic-intro.jpg" },
  { symbol: "H", name: "Hidrogeno", image: "/images/comic/comic-h.jpg" },
  { symbol: "Li", name: "Litio", image: "/images/comic/comic-li.jpg" },
  { symbol: "B", name: "Boro", image: "/images/comic/comic-b.jpg" },
  { symbol: "C", name: "Carbono", image: "/images/comic/comic-c.jpg" },
  { symbol: "N", name: "Nitrogeno", image: "/images/comic/comic-n.jpg" },
  { symbol: "F", name: "Fluor", image: "/images/comic/comic-f.jpg" },
  { symbol: "P", name: "Fosforo", image: "/images/comic/comic-p.jpg" },
  { symbol: "S", name: "Azufre", image: "/images/comic/comic-s.jpg" },
  { symbol: "K", name: "Potasio", image: "/images/comic/comic-k.jpg" },
  { symbol: "Ca", name: "Calcio", image: "/images/comic/comic-ca.jpg" },
  { symbol: "Fe", name: "Hierro", image: "/images/comic/comic-fe.jpg" },
  { symbol: "Ga", name: "Galio", image: "/images/comic/comic-ga.jpg" },
  { symbol: "As", name: "Arsenico", image: "/images/comic/comic-as.jpg" },
  { symbol: "Kr", name: "Kripton", image: "/images/comic/comic-kr.jpg" },
  { symbol: "Ag", name: "Plata", image: "/images/comic/comic-ag.jpg" },
  { symbol: "Cd", name: "Cadmio", image: "/images/comic/comic-cd.jpg" },
  { symbol: "In", name: "Indio", image: "/images/comic/comic-in.jpg" },
  { symbol: "La", name: "Lantano", image: "/images/comic/comic-la.jpg" },
  { symbol: "Lu", name: "Lutecio", image: "/images/comic/comic-lu.jpg" },
  { symbol: "Ta", name: "Tantalio", image: "/images/comic/comic-ta.jpg" },
  { symbol: "Au", name: "Oro", image: "/images/comic/comic-au.jpg" },
  { symbol: "Hg", name: "Mercurio", image: "/images/comic/comic-hg.jpg" },
  { symbol: "Fr", name: "Francio", image: "/images/comic/comic-fr.jpg" },
  { symbol: "U", name: "Uranio", image: "/images/comic/comic-u.jpg" },
  { symbol: "Am", name: "Americio", image: "/images/comic/comic-am.jpg" },
]

export default function ComicEspanolPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Comic de la Tabla Periodica Espanol
        </h1>
        
        <ComicGrid elements={comicElements} />
      </div>
    </div>
  )
}
