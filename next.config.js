/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mukesh",
        mongodb_password: "KIke5pomD2Tnh4ka",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "mukesh",
      mongodb_password: "KIke5pomD2Tnh4ka",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
