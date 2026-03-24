import { ImageGallery } from "@/components/shared/image-gallery"
import {
  studentGalleryImages,
} from "@/lib/cloudinary-gallery";


export default function AlumnadoPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Alumnado Facultad de Quimica
        </h1>
        
        <ImageGallery images={studentGalleryImages} columns={3} />
      </div>
    </div>
  )
}
