import { ComicGrid } from "@/components/comic/comic-grid"
import { comicGalleryImages } from "@/lib/cloudinary-gallery";
import { ImageGallery } from "@/components/shared/image-gallery";
import { DownloadButton } from "@/components/shared/download-button";

// Elementos del comic con sus simbolos

export default function ComicEspanolPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Comic de la Tabla Periodica Espanol
        </h1>
        
        <ImageGallery images={comicGalleryImages} />
      </div>
      <div className="mt-8">
        <DownloadButton
          downloadKey="comic-es:downloads"
          filePath="/pdf/comic_tabla_periodica.pdf"
          label="DESCARGAR COMIC"
          className="bg-primary hover:bg-primary-hover text-white"
          countClassName="text-gray-500"
          showIcon
        />
      </div>
    </div>
  )
}
