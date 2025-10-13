"use client"

import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CardProject from "./card-project";
import Projects from "./projects";

export default function Workspace({projects = []} : {
    projects: Project[]
}) {

    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h2 className="text-primary text-xl">Portfolio</h2>
                        <h2 className="text-5xl font-bold my-2">
                            <AnimatedShinyText>Selected Projects</AnimatedShinyText>
                        </h2>
                        <p className="opacity-50">{`Here's a curated selection showcasing my expertise and the achieved results.`}</p>
                    </div>
                    {
                        <Link href="/portfolio" className="my-3 py-2 px-4 w-fit border-2 border-foreground rounded-full flex items-center gap-3 font-semibold transition-transform duration-300 ease-in-out hover:scale-110">
                            <span>See All Project</span>
                            <FaArrowRight />
                        </Link>
                    }
                </div>
                <Projects onlySelected={true} projects={projects} />
            </div>
        </section>
    )
}