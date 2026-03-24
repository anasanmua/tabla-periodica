interface VimeoPlayerProps {
  vimeoId: string;
  title: string;
  autoplay?: boolean;
  className?: string;
}

export function VimeoPlayer({
  vimeoId,
  title,
  autoplay = false,
  className = "",
}: VimeoPlayerProps) {
  const params = new URLSearchParams();
  if (autoplay) params.set("autoplay", "1");

  const src = `https://player.vimeo.com/video/${vimeoId}${params.toString() ? `?${params.toString()}` : ""}`;

  return (
    <div className={`aspect-video w-full rounded overflow-hidden ${className}`}>
      <iframe
        src={src}
        className="w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

