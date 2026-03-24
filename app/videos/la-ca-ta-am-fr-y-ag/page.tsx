import { elementsVideosGallery } from "@/lib/cloudinary-gallery";
import { CloudinaryVideo } from "@/components/videos/cloudinary-video";

export default function ElementosVideosPage() {
  return (
     <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          La, Ca, Ta, Am, Fr y Ag
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {elementsVideosGallery.map((video) => (
            <div key={video.src}>
              <CloudinaryVideo publicId={video.src} title={video.alt} />
            </div>
          ))}
        </div>
      </div>
     </div>
  );
}
