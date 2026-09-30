import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // React's dev-mode debugging tooling requires eval; production never does.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      `connect-src 'self' https://formspree.io${isDev ? " ws: http://localhost:*" : ""}`,
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: true,
  },
  // Old Squarespace URLs that Google still has indexed — permanent redirects
  // pass their ranking to the matching new pages instead of 404ing.
  async redirects() {
    return [
      { source: "/packages", destination: "/services/detail-packages", permanent: true },
      { source: "/packages-1", destination: "/services/ceramic-coating", permanent: true },
      { source: "/exterior", destination: "/services/exterior-detailing", permanent: true },
      { source: "/interior", destination: "/services/interior-detailing", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
