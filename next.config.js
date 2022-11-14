/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: `https://api.nangmanski.com/:path*`,
      },
    ];
  },

  // Uncoment to add domain whitelist
  images: {
    domains: [
      'image.nangmanski.com',
      'www.jisanresort.co.kr',
      'www.sonohotelsresorts.com',
      'www.oakvalley.co.kr',
      'kangwonland.high1.com',
      'www.elysian.co.kr',
      'www.yongpyong.co.kr',
      'https://www.mdysresort.com',
      'www.o2resort.com',
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
