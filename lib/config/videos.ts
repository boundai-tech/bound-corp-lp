/**
 * Video URLs - use GitHub Releases for reliable hosting on Vercel
 * Create a release at: https://github.com/K0hei27/bound-lp/releases/new
 * Tag: v1.0.0, attach: hero-demo-4k.mp4, highlight1.mp4, screening.mp4
 */
const GITHUB_RELEASE_BASE =
  "https://github.com/K0hei27/bound-lp/releases/download/v1.0.0";

export const videoUrls = {
  hero: `${GITHUB_RELEASE_BASE}/hero-demo-4k.mp4`,
  highlight1: `${GITHUB_RELEASE_BASE}/highlight1.mp4`,
  screening: `${GITHUB_RELEASE_BASE}/screening.mp4`,
};
