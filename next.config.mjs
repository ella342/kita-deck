/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The deck moved to /community; keep old /deck links working.
      { source: "/deck", destination: "/community", permanent: true },
      { source: "/deck/:path*", destination: "/community", permanent: true },
    ];
  },
};

export default nextConfig;
