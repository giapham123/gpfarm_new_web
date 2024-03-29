// const { i18n } = require("./next-i18next.config");

module.exports = {
  // i18n,
  devIndicators: {},
  //config for build github page
  // basePath: '/gpfarm_new_web',
  // publicRuntimeConfig: {
  //   basePath: "/gpfarm_new_web",
  // },
  // assetPrefix: 'https://giapham123.github.io/gpfarm_new_web/',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' }
  //   }
  // },
  // images: {
  //   unoptimized: true
  // },
  //end config
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "VND",
  },
  webpack(config) {
    config.resolve.fallback = {
      "child_process": false, 
        "process":  false, 
        "fs": false, 
        // "util": false, 
        // "http": false,
        // "https": false,
        "tls": false,
        "net": false,
        // "crypto": false, 
        // "path": false,
        // "os": false, 
        // "stream": false,
        // "zlib": false,
        "dns":false
    };
    
    return config;
  }
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   i18n,
//   devIndicators: {},
//   publicRuntimeConfig: {
//     // Available on both server and client
//     theme: "DEFAULT",
//     currency: "USD",
//   },
// });
