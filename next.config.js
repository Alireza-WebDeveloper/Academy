/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://webwizard-api.vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/img/user/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/img/course/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
