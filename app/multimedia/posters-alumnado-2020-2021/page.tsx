import { ImageGallery } from "@/components/shared/image-gallery"

const posterImages = [
  { src: "/images/posters/poster-1.jpg", alt: "Poster elemento quimico Rodio" },
  { src: "/images/posters/poster-2.jpg", alt: "Poster elemento quimico Plutonio" },
  { src: "/images/posters/poster-3.jpg", alt: "Poster elemento quimico Uranio" },
  { src: "/images/posters/poster-4.jpg", alt: "Poster elemento quimico Azufre" },
  { src: "/images/posters/poster-5.jpg", alt: "Poster elemento quimico Aluminio" },
  { src: "/images/posters/poster-6.jpg", alt: "Poster elemento quimico Iridio" },
  { src: "/images/posters/poster-7.jpg", alt: "Poster elemento quimico Oxigeno" },
  { src: "/images/posters/poster-8.jpg", alt: "Poster elemento quimico Wolframio" },
  { src: "/images/posters/poster-9.jpg", alt: "Poster elemento quimico Plomo" },
  { src: "/images/posters/poster-10.jpg", alt: "Poster elemento quimico Sodio" },
  { src: "/images/posters/poster-11.jpg", alt: "Poster elemento quimico Cobalto" },
  { src: "/images/posters/poster-12.jpg", alt: "Poster elemento quimico Rubidio" },
  { src: "/images/posters/poster-13.jpg", alt: "Poster elemento quimico Berilio" },
  { src: "/images/posters/poster-14.jpg", alt: "Poster elemento quimico Estroncio" },
  { src: "/images/posters/poster-15.jpg", alt: "Poster elemento quimico Selenio" },
  { src: "/images/posters/poster-16.jpg", alt: "Poster elemento quimico Galio" },
]

export default function PostersPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">
          Posters/Presentaciones
        </h1>
        <h2 className="text-xl text-primary text-center mb-8">
          Alumnado 2020/2021
        </h2>
        
        <ImageGallery images={posterImages} columns={4} />
      </div>
    </div>
  )
}
