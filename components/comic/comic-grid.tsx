"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ComicElement {
  symbol: string
  name: string
  image: string
}

interface ComicGridProps {
  elements: ComicElement[]
}

export function ComicGrid({ elements }: ComicGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? elements.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === elements.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {elements.map((element, index) => (
          <button
            key={element.symbol}
            onClick={() => openLightbox(index)}
            className="relative aspect-[3/4] overflow-hidden rounded bg-gray-100 hover:opacity-90 transition-opacity cursor-pointer group"
          >
            <Image
              src={element.image}
              alt={`${element.symbol} - ${element.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-bold text-primary">
              {element.symbol}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-2xl aspect-[3/4] mx-4">
            <Image
              src={elements[currentIndex].image}
              alt={`${elements[currentIndex].symbol} - ${elements[currentIndex].name}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-bold text-lg">{elements[currentIndex].symbol} - {elements[currentIndex].name}</p>
            <p className="text-sm">{currentIndex + 1} / {elements.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
