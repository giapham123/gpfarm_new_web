// const { i18n } = require("./next-i18next.config");

module.exports = {
  // i18n,
  output: "export", 
  basePath: "/bazaar-react-js", // <=== enables static exports
  reactStrictMode: true,
  devIndicators: {},
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "USD",
  },
  webpack(config) {
    config.resolve.fallback = {
      "child_process": false, 
        "process":  false, 
        "fs": false, 
        "tls": false,
        "net": false,
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
