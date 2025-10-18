import Projects from "@/components/layout/projects";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ReadData } from "@/lib/helper";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Zulfahmidev",
  description:
    "Here's a curated selection showcasing my expertise and the achieved results.",
  alternates: {
    canonical: "https://zulfahmidev.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Zulfahmidev",
    description: "Here's a curated selection showcasing my expertise and the achieved results.",
    url: "https://zulfahmidev.com/portfolio",
    siteName: "Zulfahmidev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Zulfahmidev",
    description:
      "Here's a curated selection showcasing my expertise and the achieved results.",
  },
}

export default async function PortfolioPage() {
    const projects = await ReadData('projects.json')
    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h1 className="text-primary text-xl">Portfolio</h1>
                        <div className="text-5xl font-bold my-2">
                            <AnimatedShinyText>All Projects</AnimatedShinyText>
                        </div>
                        <p className="opacity-50">{`Here's a curated selection showcasing my expertise and the achieved results.`}</p>
                    </div>
                </div>
                <Projects projects={projects} />
            </div>
        </section>
    )
}