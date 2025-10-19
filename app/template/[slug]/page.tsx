import { ReadData } from "@/lib/helper"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"
import TemplateCard from "../template-card"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const templates = await ReadData('templates.json') as Template[]
    const data = templates.find(v => v.slug === params.slug)

    if (!data) {
        return {
            title: "Template Not Found | Zulfahmidev",
            description: "The requested template could not be found.",
        }
    }

    const title = `${data.name} - Template - Zulfahmidev`
    const description = data.description || "Free website templates by Zulfahmidev."
    const image = data.image?.url || "/assets/project.png"
    const url = `https://zulfahmidev.com/template/${data.slug}`

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Zulfahmidev",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: data.image?.alt || data.name,
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    }
}

export default async function TemplateDetailPage({ params: { slug } }: {
    params: {
        slug: string
    }
}) {
    const templates = await ReadData('templates.json') as Template[]
    const data = await templates.find((v) => v.slug === slug) as Template
    return (
        <section className="py-16 container mx-auto px-5 lg:px-0">
            <article itemProp="mainEntity">
                <header className="lg:px-8">
                    <nav aria-label="Breadcrumb">
                        <Link
                            href="/template"
                            className="flex gap-3 w-fit items-center py-3 opacity-50 hover:opacity-100"
                            title="Back to Portfolio"
                        >
                            <FaArrowLeft aria-hidden="true" />
                            <span>Back to Templates</span>
                        </Link>
                    </nav>
                </header>
                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                    <div className="order-1 lg:order-2">
                        <figure className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden border">
                            <Image
                                src={data?.image?.url ?? "/assets/project.png"}
                                alt={data?.image?.alt ?? `${data?.name} template image`}
                                title={data?.name}
                                className="object-cover object-center"
                                fill
                                priority
                            />
                            {data?.image?.alt && (
                                <figcaption className="sr-only">{data.image.alt}</figcaption>
                            )}
                        </figure>
                    </div>

                    <div className="order-2 lg:order-1">
                        <h1
                            className="text-3xl font-bold my-2 capitalize text-primary"
                            itemProp="headline"
                        >
                            {data?.name}
                        </h1>
                        <p>Created by <span className="font-semibold">Zulfahmidev</span></p>
                        <p className="opacity-50 mt-4">{data.description}</p>
                        <Link
                            href={`/template/${data.slug}/download`}
                            className="inline-block mt-8 py-2 px-4 border-2 border-foreground rounded-full font-semibold w-fit mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                        >
                            Download Free
                        </Link>
                    </div>
                </div>
            </article>
            <aside className="">
                <h2 className="text-xl mt-8 font-semibold">Other Templates</h2>
                <div className="grid lg:grid-cols-3 mt-6 gap-6">
                    {
                        templates.map((data, i) => (
                            <TemplateCard data={data} key={i} />
                        ))
                    }
                </div>
            </aside>
        </section>
    )
}