import Image from "next/image";
import Link from "next/link";

export default function TemplateCard({data} : {
    data: Template
}) {
    return (
        <article>
            <div className="aspect-[16/9] overflow-hidden rounded-lg relative">
                <Image 
                    className="object-cover"
                    src={data.image?.url ?? ''}
                    alt={data.image?.alt ?? ''}
                    fill />
            </div>
            <div className="p-3">
                <h2 className="capitalize text-lg font-semibold">{data.name}</h2>
                <p className="opacity-50 text-xs">Created by <span className="font-semibold">Zulfahmidev</span></p>
                <div className="flex gap-3 py-2">
                    {/* <div className="text-2xl font-semibold text-primary">Free</div> */}
                    <Link href={`/template/${data.slug}`} className="py-2 px-3 rounded-lg bg-foreground text-sm text-background">
                        Detail
                    </Link>
                    <Link href={`/template/${data.slug}/download`} className="py-2 px-3 rounded-lg border text-sm">
                        Download
                    </Link>
                </div>
            </div>
        </article>
    )
}