/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        unoptimized: true,
        loader: "custom",
        loaderFile: "./lib/imageLoader.ts",
    },
    
}

module.exports = nextConfig
