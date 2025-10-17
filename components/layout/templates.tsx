import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
import { AnimatedShinyText } from "../ui/animated-shiny-text"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import TemplateCard from "./template-card"

export function Templates() {
  return (
    <div className="">
        <div className="text-center">
            <h2 className="text-xl text-primary">Templates</h2>
            <h3 className="text-5xl font-bold my-2">
                <AnimatedShinyText>Try My Template</AnimatedShinyText>
            </h3>
        </div>
        <div className="mt-16 relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {/* {firstRow.map((review) => (
                ))} */}
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
            </Marquee>
            {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                <TemplateCard key={review.username} {...review} />
                ))}
            </Marquee> */}
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
        <a href="" className="my-8 py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold w-fit mx-auto transition-transform duration-300 ease-in-out hover:scale-110">
            <span>Show All Templates</span>
            <FaArrowRight />
        </a>
    </div>
  )
}
