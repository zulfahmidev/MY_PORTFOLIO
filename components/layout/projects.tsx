"use client"

import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CardProject from "./card-project";

export default function Projects({onlySelected = false, projects = []} : {
    onlySelected?: boolean,
    projects: Project[]
}) {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">

            {
                projects
                .filter(v => {
                    return onlySelected ? v.isSelected : true
                })
                .sort((a, b) => {
                    const dateA = new Date(a.estimate.start + "-01").getTime();
                    const dateB = new Date(b.estimate.start + "-01").getTime();
                    return dateB - dateA;
                })
                .map((data, i) => (
                    <CardProject key={i} data={data} />
                ))
            }

        </div>
    )
}