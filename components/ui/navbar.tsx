'use client'

import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        handleScroll()

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed z-10 left-0 right-0">

            <motion.div
                animate={isScrolled ? { width: "fit-content", marginTop: "12px" } : { width: "100%", marginTop: "0px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`mx-auto h-16 flex items-center justify-between gap-8 bg-background/30 min-w-[90%] lg:min-w-fit px-5 lg:px-0 ${isScrolled ? 'rounded-full lg:px-10 backdrop-blur-md border border-foreground/10' : 'container'}`}
            >
                <div className="h-8 w-8 relative">
                    <Image
                        className="h-full dark:hidden inline-block"
                        src="/assets/logo-black.png"
                        alt="logo black zulfahmidev"
                        fill />
                    <Image
                        className="h-full hidden dark:inline-block"
                        src="/assets/logo-white.png"
                        alt="logo black zulfahmidev"
                        fill />
                </div>
                <nav className="">
                    <ul className="flex items-center gap-6">
                        {/* <li>
                            <a className="opacity-50 hover:opacity-100" href="">Home</a>
                        </li> */}
                        <li>
                            <a className="opacity-50 hover:opacity-100" href="#about">About</a>
                        </li>
                        <li>
                            <a className="opacity-50 hover:opacity-100" href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className="opacity-50 hover:opacity-100" href="#contact">Contact</a>
                        </li>
                        {/* <li>
                            <a className="opacity-50 hover:opacity-100" href="">Apps</a>
                        </li>
                        <li>
                            <a className="opacity-50 hover:opacity-100" href="">Blog</a>
                        </li>
                        <li>
                            <a className="opacity-50 hover:opacity-100" href="">Templates</a>
                        </li> */}
                    </ul>
                </nav>
                <div className="text-lg opacity-50 hover:opacity-100 cursor-pointer">
                    <AnimatedThemeToggler className="cursor-pointer flex items-center" />
                </div>
            </motion.div>
        </header>
    )
}