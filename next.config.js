/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
