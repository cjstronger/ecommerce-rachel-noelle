/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
      { protocol: "https", hostname: "nzszzpxpduixjugtfdla.supabase.co" },
    ],
  },
};

export default nextConfig;
