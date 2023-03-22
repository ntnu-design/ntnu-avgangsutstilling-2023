const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    images: {
        unoptimized: true,
        loader: "custom",
        loaderFile: "./lib/imageLoader.ts",
    },
    trailingSlash: true,
}

module.exports = withContentlayer(nextConfig);
