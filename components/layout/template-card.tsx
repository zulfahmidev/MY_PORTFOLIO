import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

export default function TemplateCard({data} : {
  data: Template
}) {
  return (
    <figure
      className={cn(
        "relative h-full w-64 overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          className=""
          src={data.image?.url ?? ''}
          alt={data.image?.alt ?? ''}
          fill />
        <div className="opacity-0 hover:opacity-100 bg-background/50 backdrop-blur-md absolute left-0 top-o w-full h-full rounded-lg transition-all flex flex-col items-center justify-center gap-3">
          <div className="capitalize">{data.name}</div>
          <div className="flex gap-3">
            <Link href={`/template/${data.slug}/download`} className="w-fit py-2 px-4 text-sm text-background rounded-lg bg-foreground cursor-pointer">
              <FaDownload />
            </Link>
            <Link href={`/template/${data.slug}`} className="w-fit py-2 px-4 text-sm text-foreground rounded-lg border border-foreground cursor-pointer">
              <FaEye />
            </Link>
          </div>
        </div>
      </div>
    </figure>
  )
}