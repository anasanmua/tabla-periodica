export default function DesfileVideoPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">
          Un desfile con mucha quimica
        </h1>
        
        <div className="aspect-video w-full max-w-3xl mx-auto rounded overflow-hidden shadow-lg">
          <iframe
            src="https://player.vimeo.com/video/367892254"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Un desfile con mucha quimica"
          />
        </div>
      </div>
    </div>
  )
}
