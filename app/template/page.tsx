import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { ReadData } from "@/lib/helper"
import TemplateCard from "./template-card"

export default async function TemplatePage() {
    const templates = await ReadData('templates.json') as Template[]
    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h1 className="text-primary text-xl">Templates</h1>
                        <div className="text-5xl font-bold my-2">
                            <AnimatedShinyText>All Templates</AnimatedShinyText>
                        </div>
                        <p className="opacity-50">{`Discover quality templates crafted to build modern and professional websites.`}</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 mt-8">
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