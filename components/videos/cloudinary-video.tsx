interface CloudinaryVideoProps {
  publicId: string;
  title: string;
  poster?: string;
  className?: string;
}

export function CloudinaryVideo({
  publicId,
  title,
  poster,
  className = "",
}: CloudinaryVideoProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const src = `https://res.cloudinary.com/${cloudName}/video/upload/q_auto/${publicId}.mp4`;
  const defaultPoster = `https://res.cloudinary.com/${cloudName}/video/upload/so_auto,w_800,h_450,c_fill,q_auto,f_auto/${publicId}.jpg`;

  return (
    <div className={`aspect-video w-full rounded overflow-hidden ${className}`}>
      <video
        controls
        poster={poster ?? defaultPoster}
        className="w-full h-full object-cover"
        title={title}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

