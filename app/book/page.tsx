import { DownloadButton } from "@/components/shared/download-button";
import { bookGalleryImages } from "@/lib/cloudinary-gallery";
import { ImageGallery } from "@/components/shared/image-gallery";

const bookPages = [
  {
    src: "/images/book/book-cover.jpg",
    alt: "El baile de los elementos - Portada",
  },
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
];

export default function BookPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Alumnado Facultad de Quimica
        </h1>

        <ImageGallery images={bookGalleryImages} columns={3} useCloudinary />

        <div className="mt-8">
          <DownloadButton
            downloadKey="book:downloads"
            className="bg-primary hover:bg-primary-hover text-white"
            countClassName="text-gray-500"
            showIcon
          />
        </div>
      </div>
    </div>
  );
}
