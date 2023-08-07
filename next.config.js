/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mexx-img-2019.s3.amazonaws.com",
        pathname: "/**/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "logg.api.cygnus.market",
        pathname: "/**/*",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
