"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

export default function AutoplayVideo({ src, className }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    const attemptPlay = () => { v.play().catch(() => {}); };
    attemptPlay();
    v.addEventListener("canplay", attemptPlay, { once: true });
    const onTouch = () => attemptPlay();
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    return () => {
      v.removeEventListener("canplay", attemptPlay);
      document.removeEventListener("touchstart", onTouch);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
      suppressHydrationWarning
    />
  );
}
