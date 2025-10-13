import Image from "next/image"
import Link from "next/link"
import { IconType } from "react-icons"
import { FaLaravel } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap, SiDocker, SiFlask, SiGo, SiGooglecloud, SiJquery, SiKotlin, SiMysql, SiNextdotjs, SiNuxtdotjs, SiPostgresql, SiPusher, SiRabbitmq, SiRedis, SiTensorflow, SiVuedotjs } from "react-icons/si";

const stackIcons: Record<string, IconType> = {
    "laravel": FaLaravel,
    "nuxt.js": SiNuxtdotjs,
    "tailwind": RiTailwindCssFill,
    "flutter": FaFlutter,
    "mysql": SiMysql,
    "pusher": SiPusher,
    "flask": SiFlask,
    "tensorflow": SiTensorflow,
    "gcp": SiGooglecloud,
    "postgresql": SiPostgresql,
    "vue.js": SiVuedotjs,
    "kotlin": SiKotlin,
    "golang": SiGo,
    "rabbit": SiRabbitmq,
    "redis": SiRedis,
    "docker": SiDocker,
    "next.js": SiNextdotjs,
    "jquery": SiJquery,
    "bootstrap": SiBootstrap,
}

export default function CardProject({data}: {
    data: Project
}) {

    function formatDate(d: Date) {
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        })
    }

    return (
        <Link href={`/portfolio/${data.slug}`}>
            <article className="col-span-1 group">
                <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden border border-foreground/1">
                    <Image
                        src={data.image?.url ?? '/assets/project.png'}
                        alt={data.image?.alt ?? data.title}
                        className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                        fill />
                </div>
                <div className="py-3">
                    <h3 className="font-semibold text-xl">{data.title}</h3>
                    <div className="opacity-50 flex items-center gap-3 mt-1">
                        <p>{data.position}</p>
                        <div className="w-1 h-1 rounded-full bg-foreground"></div>
                        <div className="">
                            <time dateTime="Y-m">
                                {formatDate(new Date(data.estimate.start + '-01'))}
                            </time>
                            <span className="px-1">-</span> 
                            <time dateTime="Y-m">
                                {formatDate(new Date(data.estimate.end + '-01'))}
                            </time>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center mt-2">
                        {
                            data.stacks.map((stack, i) => {
                                if (stackIcons[stack.toLowerCase()]) {
                                    const Icon = stackIcons[stack.toLowerCase()]
                                    return (
                                        <Icon key={i} className={`text-xl text-foreground/50`} />
                                    )
                                }
                                return null
                            }).filter(v => v != null)
                        }
                    </div>
                </div>
            </article>
        </Link>
    )
}