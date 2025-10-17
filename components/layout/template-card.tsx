import { cn } from "@/lib/utils";
import Image from "next/image";

export default function TemplateCard() {
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
          src={'/template.png'}
          alt="" 
          fill />
        <div className="opacity-0 hover:opacity-100 bg-background/50 backdrop-blur-md absolute left-0 top-o w-full h-full rounded-lg transition-all flex flex-col items-center justify-center gap-3">
          <div className="w-fit py-2 px-4 text-sm text-background rounded-lg bg-foreground cursor-pointer">Beli Sekarang</div>
          <div className="w-fit py-2 px-4 text-sm text-foreground rounded-lg border border-foreground cursor-pointer">Lihat</div>
        </div>
      </div>
    </figure>
  )
}