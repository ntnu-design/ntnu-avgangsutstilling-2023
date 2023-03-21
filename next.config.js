/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        unoptimized: true,
        loader: "custom",
        loaderFile: "./lib/imageLoader.ts",
    },
    trailingSlash: true,
}

module.exports = nextConfig
