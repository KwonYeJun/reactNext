const withPlugins = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');
// const withPWA = require('next-pwa')({
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     runtimeCaching: require('next-pwa/cache'),
//     disable: process.env.NODE_ENV === 'development',
//   },
// });

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
});

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          register: true,
          skipWaiting: true,
          runtimeCaching,
          disable: process.env.NODE_ENV === 'development',
        },
      },
    ],
  ],
  nextConfig,
);