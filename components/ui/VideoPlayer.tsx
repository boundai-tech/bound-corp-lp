"use client";

interface VideoPlayerProps {
  src: string;
  title?: string;
  fallback?: React.ReactNode;
  className?: string;
  fill?: boolean;
  aspectRatio?: string;
  videoClassName?: string;
}

export default function VideoPlayer({
  src,
  title = "Video",
  className = "",
  fill = false,
  aspectRatio = "16/9",
  videoClassName = "w-full h-full object-cover",
}: VideoPlayerProps) {
  if (!src) {
    return null;
  }

  const wrapperClass = fill
    ? `absolute inset-0 w-full h-full rounded-[10px] overflow-hidden ${className}`
    : `relative overflow-hidden ${className}`;

  const wrapperStyle = fill ? undefined : { aspectRatio };

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <video
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={videoClassName}
      />
    </div>
  );
}
