/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
};

// 將原本的 module.exports 改成這行：
export default nextConfig;