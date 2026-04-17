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
      {
        source: '/student',
        destination: 'https://student-landing-page-two.vercel.app/',
      },
      {
        source: '/student/:path*',
        destination: 'https://student-landing-page-two.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
