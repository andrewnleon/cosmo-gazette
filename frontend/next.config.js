const nextConfig = {
  images: {
    domains: [
      "localhost:3000",
      "cosmo-gazette.vercel.app",
      "localhost",
    ],
  },
  compiler: { styledComponents: true },
  pageExtensions: ["json", "js", "svg", "tsx", "ts"],
}
module.exports = nextConfig