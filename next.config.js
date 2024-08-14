/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
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
