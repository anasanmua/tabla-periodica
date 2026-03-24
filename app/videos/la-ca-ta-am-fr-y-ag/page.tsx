import { VideoGrid } from "@/components/videos/video-grid"

const elementVideos = [
  {
    id: "video-la",
    title: "Lantano (La)",
    thumbnail: "/images/videos/video-la.jpg",
    vimeoId: "367892254"
  },
  {
    id: "video-ca",
    title: "Calcio (Ca)",
    thumbnail: "/images/videos/video-ca.jpg",
    vimeoId: "367892254"
  },
  {
    id: "video-ta",
    title: "Tantalio (Ta)",
    thumbnail: "/images/videos/video-ta.jpg",
    vimeoId: "367892254"
  },
  {
    id: "video-am",
    title: "Americio (Am)",
    thumbnail: "/images/videos/video-am.jpg",
    vimeoId: "367892254"
  },
  {
    id: "video-fr",
    title: "Francio (Fr)",
    thumbnail: "/images/videos/video-fr.jpg",
    vimeoId: "367892254"
  },
  {
    id: "video-ag",
    title: "Plata (Ag)",
    thumbnail: "/images/videos/video-ag.jpg",
    vimeoId: "367892254"
  },
]

export default function ElementosVideosPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          La, Ca, Ta, Am, Fr y Ag
        </h1>
        
        <VideoGrid videos={elementVideos} />
      </div>
    </div>
  )
}
