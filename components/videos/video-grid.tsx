"use client"

import Image from "next/image"
import { useState } from "react"
import { Play, X } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  vimeoId: string
}

interface VideoGridProps {
  videos: Video[]
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className="group relative aspect-video overflow-hidden rounded bg-gray-900 cursor-pointer"
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">{video.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={activeVideo.title}
            />
          </div>
        </div>
      )}
    </>
  )
}
