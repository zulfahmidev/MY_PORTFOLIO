import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { ReadData } from "@/lib/helper"
import TemplateCard from "./template-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Website Templates | Download Modern & Responsive Designs by Zulfahmidev",
  description:
    "Download 100% free, modern, and responsive website templates by Zulfahmidev. Perfect for developers, designers, and startups who want clean, professional designs without paying a dime.",
  keywords: [
    "free website templates",
    "HTML templates",
    "Next.js templates",
    "React templates",
    "frontend templates",
    "Zulfahmidev templates",
    "download free templates",
    "responsive web design",
    "portfolio templates",
    "landing page templates",
  ],
  alternates: {
    canonical: "https://zulfahmidev.com/template",
  },
  openGraph: {
    title: "Free Website Templates | Download Modern & Responsive Designs by Zulfahmidev",
    description:
      "Get high-quality, free, and responsive website templates for your next project. Designed and crafted by Zulfahmidev for developers and startups.",
    url: "https://zulfahmidev.com/template",
    siteName: "Zulfahmidev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Templates | Download Modern & Responsive Designs by Zulfahmidev",
    description:
      "Browse and download free, modern, and mobile-friendly website templates built by Zulfahmidev.",
  },
}

export default async function TemplatePage() {
    const templates = await ReadData('templates.json') as Template[]
    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h1 className="text-primary text-xl">Templates</h1>
                        <div className="text-5xl font-bold my-2">All Templates</div>
                        <p className="opacity-50">{`Discover quality templates crafted to build modern and professional websites.`}</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 mt-8 gap-6">
                    {
                        templates.map((data, i) => (
                            <TemplateCard data={data} key={i} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}