/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
    unoptimized: process.env.NODE_ENV === 'production' && process.env.NETLIFY === 'true',
  },
};
