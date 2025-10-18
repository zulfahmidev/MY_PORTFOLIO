import type { Metadata } from "next";
import { SUSE } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Providers } from "./theme-provider";
import Script from "next/script";

const suseMono = SUSE({
  variable: "--font-suse-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Zulfahmidev - Software Engineer",
    template: "%s | Zulfahmidev",
  },
  description: "Hi, I'm Zulfahmi, A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.",
  keywords: [
    "Zulfahmi", "Backend Developer", "Golang", "Python", "PHP", "Portfolio", "Backend Engineer", "Frontend Developer", "Frontend Engineer", "Fullstack Developer", "Fullstack Engineer", "Software Developer", "Software Engineer", "Java", "JavaScript", "Flask", "MongoDB", "MySql", "PostgreSql", "Firebase", "Laravel", "Gin", "Fiber", "Next.js", "Nuxt.js", "Vue.js", "React.js", "Node.js", "Express.js", "Nest.js", "Fastify.js", "CodeIgniter", "Django", "Java Spring Boot", "APIs", "Website", "Application", "Design", "UI/UX", "Vocaject", "Arahku", "UKM POLICY", "Kopi Pas", "Google Cloud Platform", "Tensorflow", "Super Pasar Rakyat Indonesia", "Sekawan Media Informatika", "Aceh", "Lhokseumawe"
  ],
  authors: [{ name: "Zulfahmi", url: "https://zulfahmidev.com" }],
  creator: "Zulfahmi",
  publisher: "Zulfahmidev",

  // Metadata standar web
  metadataBase: new URL("https://zulfahmidev.com"),
  alternates: {
    canonical: "https://zulfahmidev.com",
    languages: {
      "id-ID": "https://zulfahmidev.com/id",
      "en-US": "https://zulfahmidev.com/en",
    },
  },

  // Open Graph (Facebook, LinkedIn, dll.)
  openGraph: {
    type: "website",
    url: "https://zulfahmidev.com",
    title: "Zulfahmidev - Software Engineer",
    description: "Hi, I'm Zulfahmi, A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.",
    siteName: "Zulfahmidev",
    images: [
      {
        url: "https://zulfahmidev.com/assets/profile.jpeg",
        width: 750,
        height: 750,
        alt: "Zulfahmidev - Software Engineer",
      },
    ],
    locale: "id_ID",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Zulfahmidev - Software Engineer",
    description: "Hi, I'm Zulfahmi, A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.",
    site: "@zulfahmidev",
    creator: "@zulfahmidev",
    images: ["https://zulfahmidev.com/assets/profile.jpeg"],
  },

  // Icons (favicon, apple-touch-icon, dll.)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // Theme
  themeColor: "#ffffff",
  colorScheme: "light dark",

  // Robots (SEO directives)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // App metadata (PWA / manifest)
  applicationName: "Zulfahmidev",
  category: "Portfolio",
  generator: "Next.js 14",

  other: {
    "google-adsense-account": "ca-pub-2636188303394824",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2636188303394824"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`
          ${suseMono.variable} antialiased font-suse relative
        `}
      >
        <Providers>
          <Navbar />
          {children}
          {/* <ProgressiveBlur height="6rem" position="bottom" /> */}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
