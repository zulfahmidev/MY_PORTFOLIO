'use client'

import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
                className={`mx-auto h-16 flex items-center justify-between gap-8 bg-background/30 min-w-[90%] lg:min-w-fit px-5 lg:px-0 ${isScrolled ? 'rounded-full lg:px-10 backdrop-blur-md border border-foreground/10 shadow-lg' : 'container'}`}
            >
                <Link href="/" className="block h-8 aspect-square relative">
                    <Image
                        className="h-full dark:hidden inline-block"
                        src="/assets/logo-black.png"
                        alt="logo black zulfahmidev"
                        sizes="(max-width: 768px) 32px, 32px"
                        fill />
                    <Image
                        className="h-full hidden dark:inline-block"
                        src="/assets/logo-white.png"
                        alt="logo black zulfahmidev"
                        sizes="(max-width: 768px) 32px, 32px"
                        fill />
                </Link>
                <nav className="">
                    <ul className="flex items-center gap-6">
                        {/* <li>
                            <a className="opacity-50 hover:opacity-100" href="">Home</a>
                        </li> */}
                        <li>
                            <Link className="opacity-50 hover:opacity-100" href="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link className="opacity-50 hover:opacity-100" href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="opacity-50 hover:opacity-100" href="/template">Templates</Link>
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