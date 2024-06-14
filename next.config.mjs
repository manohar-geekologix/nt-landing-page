/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['b.io', 'cdn.builder.io'],
    },
};

export default nextConfig;
