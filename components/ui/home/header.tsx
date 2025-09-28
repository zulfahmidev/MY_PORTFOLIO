import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "../animated-grid-pattern"
import { MorphingText } from "../morphing-text"
import { FaArrowRight } from "react-icons/fa"

export function Header() {

  const texts = [
    "Comfort",
    "Security",
    "Resilience",
    "Integrity",
  ]

  return (
    <div className="bg-background relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        // repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12"
        )}
      />
      <div className="flex flex-col items-center w-full">
        <div className="px-3 py-1 rounded-full border border-primary/50 w-fit text-sm bg-primary/10 backdrop-blur-sm flex gap-3 items-center">
          <div className="w-4 h-4 bg-primary/25 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <span>Available For New Project</span>
        </div>
        <MorphingText className="my-8" texts={texts} />
        <p className="lg:w-[50%] text-center text-xl">I believe that code is a medium for creativity. My expertise is in turning great ideas into beautiful, functional, and memorable digital experiences.</p>
        <a href="" className="bg-primary font-semibold py-3 px-6 text-lg my-8 relative rounded-full flex items-center gap-3 text-black">
          <span>Know Me More</span>
          <FaArrowRight />
        </a>
      </div>
    </div>
  )
}
