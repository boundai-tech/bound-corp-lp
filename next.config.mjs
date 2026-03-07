/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://img.youtube.com/**'),
      new URL('https://assets.st-note.com/**'),
    ],
  },
};

export default nextConfig;
