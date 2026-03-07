/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://img.youtube.com/**'),
      new URL('https://assets.st-note.com/**'),
    ],
  },
  async rewrites() {
    return [
      {
        source: '/navigator/:path*',
        destination: 'https://boundai.framer.website/navigator/:path*',
      },
    ];
  },
};

export default nextConfig;
