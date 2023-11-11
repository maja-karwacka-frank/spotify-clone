/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dlcjkkjzphrjwetzoath.supabase.co',
			},
		],
	},
};

module.exports = nextConfig;
