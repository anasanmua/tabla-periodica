import Image from "next/image"
import { ImageGallery } from "@/components/shared/image-gallery"
import {
  bookGalleryImages,
  teachersGalleryImages,
} from "@/lib/cloudinary-gallery";

const profesoradoImages = [
  {
    src: "/images/students/profesorado-1.jpg",
    alt: "Equipo de profesores de Quimica Inorganica"
  },
  {
    src: "/images/students/profesorado-2.jpg",
    alt: "Profesores durante el evento"
  },
  {
    src: "/images/students/profesorado-3.jpg",
    alt: "Profesores organizando el desfile"
  },
]

console.log(bookGalleryImages.length, "hello1")


export default function ProfesoradoPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Profesorado Quimica Inorganica
        </h1>
        <ImageGallery images={teachersGalleryImages} columns={3} />
      </div>
    </div>
  )
}
