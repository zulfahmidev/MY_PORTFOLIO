import { ReadData } from "@/lib/helper"
import Notice from "./notice"
import AdComponent from "@/components/ad-component"

export default async function TemplateDownloadPage({params: { slug }} : {
    params: {
        slug: string
    }
}) {
    const templates = await ReadData('templates.json') as Template[]
    const data = await templates.find((v) => v.slug === slug ) as Template
    return (
        <section className="min-h-[80vh] flex items-center justify-center flex-col px-5 lg:px-0 text-center py-32">
            <Notice data={data} />
            <div style={{ width: '100%', minHeight: '100px' }} className="my-6">
                <AdComponent adSlot="4785800735" adFormat="auto" adResponsive={true} />
            </div>
        </section>
    )
}