import { VimeoPlayer } from "@/components/videos/vimeo-player"

export default function DesfileVideoPage() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Un desfile con mucha quimica
        </h1>
        
        <div className="max-w-3xl mx-auto shadow-lg">
          <VimeoPlayer
            vimeoId="344275544"
            title="Un desfile con mucha quimica"
          />
        </div>
      </div>
    </div>
  )
}
