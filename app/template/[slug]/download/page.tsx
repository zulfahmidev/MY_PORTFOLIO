import { ReadData } from "@/lib/helper"
import Notice from "./notice"

export default async function TemplateDownloadPage({params: { slug }} : {
    params: {
        slug: string
    }
}) {
    const templates = await ReadData('templates.json') as Template[]
    const data = await templates.find((v) => v.slug === slug ) as Template
    return (
        <section className="min-h-[80vh] flex items-center justify-center flex-col px-5 lg:px-0 text-center">
            <Notice data={data} />
        </section>
    )
}