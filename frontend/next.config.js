/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})
module.exports = withPWA({
  images: {
    domains: [
      "ik.imagekit.io",
      "localhost:3000",
      "localhost:1337",
      "portfolio-production.vercel.app",
      "https://sad-ceaseless-rail.strapiapp.com/api",
    ],
  },
  compiler: { styledComponents: true },
  pageExtensions: ["json", "js", "svg", "jpg", "tsx", "ts"],
})


// const nextConfig = {
//   images: {
//     domains: [
//       "ik.imagekit.io",
//       "localhost:3000",
//     ],
//   },
//   compiler: { styledComponents: true },
//   pageExtensions: ["json", "js", "svg", "tsx", "ts"],
// }
// module.exports = nextConfig