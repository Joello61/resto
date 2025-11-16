import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,

  typescript: {
    ignoreBuildErrors: false,
  },

  // --- Optimisation des images ---
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joeltech.dev",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // --- Compression ---
  compress: true,

  // --- Redirections SEO ---
  async redirects() {
    return [
      {
        source: "/projets",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/services-web",
        destination: "/services",
        permanent: true,
      },
    ];
  },

  // --- Proxy rewrite (si besoin) ---
  async rewrites() {
    return [
      {
        source: "/api/github/:path*",
        destination: "https://api.github.com/:path*",
      },
    ];
  },

  // --- Headers sécurité ---
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), camera=(), microphone=(), browsing-topics=()",
          },
        ],
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
