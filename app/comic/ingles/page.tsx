"use client";
import { DownloadButton } from "@/components/shared/download-button";
import { GalleryImage } from "@/lib/cloudinary-gallery";
import { CldImage } from "next-cloudinary";

export default function ComicInglesPage() {
  const coverImage: GalleryImage = {
    src: "table_elements_ux2xjr",
    alt: "Portada del comic de la tabla periodica en inglés",
  };
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Comic de la Tabla Periodica Inglés
        </h1>

        <div className="relative aspect-[3/4] max-w-md mx-auto rounded overflow-hidden shadow-lg mb-8">
          <CldImage
            src={coverImage.src}
            alt={coverImage.alt}
            width={1200}
            height={900}
            crop={"fit"}
            gravity="auto"
            quality="auto"
            format="auto"
            sizes={"100vw"}
          />
        </div>

        {/* Download button */}
        <div className="mt-8">
          <DownloadButton
            downloadKey="comic-en:downloads"
            filePath="/pdf/book_of_elements.pdf"
            label="¡Descárgalo ahora!"
            className="bg-primary hover:bg-primary-hover text-white"
            countClassName="text-gray-500"
            showIcon
          />
        </div>
      </div>
    </div>
  );
}
