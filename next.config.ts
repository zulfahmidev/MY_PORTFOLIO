import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://fundingchoicesmessages.google.com;",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https:;",
      "connect-src 'self' https://www.google-analytics.com https://fundingchoicesmessages.google.com;",
      "frame-src https://fundingchoicesmessages.google.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com;",
      "object-src 'none';",
      "base-uri 'self';",
    ].join(" "),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
