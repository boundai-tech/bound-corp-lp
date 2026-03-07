/** Video URLs from Vercel Blob - run `node scripts/upload-videos.mjs` to populate */
export const VIDEO_URLS = {
  hero: "https://qvlh2yhvwdcxdlze.public.blob.vercel-storage.com/hero-demo-4k.mp4",
  highlight1: "https://qvlh2yhvwdcxdlze.public.blob.vercel-storage.com/highlight1.mp4",
  screening: "https://qvlh2yhvwdcxdlze.public.blob.vercel-storage.com/screening.mp4",
} as const;

/** Local fallback paths (work in dev, not on Vercel due to LFS) */
export const VIDEO_FALLBACKS = {
  hero: "/contents/screenshots/hero-demo-4k.mp4",
  highlight1: "/contents/screenshots/highlight1.mp4",
  screening: "/contents/screenshots/screening.mp4",
} as const;

export function getVideoUrl(key: keyof typeof VIDEO_URLS): string {
  return VIDEO_URLS[key] || VIDEO_FALLBACKS[key];
}
