"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  /** カスタムサムネイル画像のURL。指定しない場合はYouTubeのデフォルトを使用 */
  thumbnailUrl?: string;
}

export default function YouTubeEmbed({ videoId, title = "Video", thumbnailUrl }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative rounded-md overflow-hidden shadow-2xl shadow-black/50 aspect-[16/8.5] group">
      {!isPlaying ? (
        <>
          <img
            src={thumbnailUrl ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
}
