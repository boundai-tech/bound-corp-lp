"use client";

import { useState } from "react";

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
 * 読み込み失敗時は fallback を表示
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
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        className={videoClassName}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
