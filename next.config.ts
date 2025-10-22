import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://www.google.com https://www.google-analytics.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google;",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https:;",
      "connect-src 'self' https://www.google-analytics.com https://fundingchoicesmessages.google.com https://pagead2.googlesyndication.com https://adservice.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://tpc.googlesyndication.com https://googleads.g.doubleclick.net;",
      "frame-src https://www.google.com https://fundingchoicesmessages.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com;",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';",
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
    value: "SAMEORIGIN", // ganti dari DENY → biar Adsense iframe tidak diblokir
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
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
