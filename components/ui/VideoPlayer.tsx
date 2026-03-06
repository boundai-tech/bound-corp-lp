"use client";

import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  /** 動画のURL。空の場合は fallback を表示 */
  src: string;
  title?: string;
  /** src が空または読み込み失敗時に表示する要素（例: YouTube埋め込み） */
  fallback?: React.ReactNode;
  className?: string;
  /** true のとき親要素を fill（absolute inset-0） */
  fill?: boolean;
  /** アスペクト比（例: "16/9", "4/3"）。fill=false のときのみ有効 */
  aspectRatio?: string;
  /** video 要素の className（例: "w-full h-auto" でアスペクト比保持） */
  videoClassName?: string;
}

/**
 * autoPlay muted loop playsInline でその場で再生する動画プレイヤー
 * ネットワークエラー時のみ fallback を表示
 */
export default function VideoPlayer({
  src,
  title = "Video",
  fallback,
  className = "",
  fill = false,
  aspectRatio = "16/9",
  videoClassName = "w-full h-full object-cover",
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      // Only trigger fallback for actual network errors (4xx, 5xx)
      if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        setHasError(true);
      }
    };

    video.addEventListener("error", handleError);
    return () => video.removeEventListener("error", handleError);
  }, [src]);

  if (!src || hasError) {
    return <>{fallback}</>;
  }

  const wrapperClass = fill
    ? `absolute inset-0 w-full h-full rounded-[10px] overflow-hidden ${className}`
    : `relative overflow-hidden ${className}`;

  const wrapperStyle = fill ? undefined : { aspectRatio };

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <video
        ref={videoRef}
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        className={videoClassName}
      />
    </div>
  );
}
