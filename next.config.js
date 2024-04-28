/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ["png.pngtree.com"],
	},
};

module.exports = nextConfig;
