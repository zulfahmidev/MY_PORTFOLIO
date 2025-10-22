import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-primary/5">
            <div className="py-12 border-t">
                <ul className="flex items-center justify-center text-lg gap-6">
                    {/* <li>
                        <a href="" className="opacity-50 hover:opacity-100">Home</a>
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
                        <a href="" className="opacity-50 hover:opacity-100">Apps</a>
                    </li>
                    <li>
                        <a href="" className="opacity-50 hover:opacity-100">Blog</a>
                    </li>
                    <li>
                        <a href="" className="opacity-50 hover:opacity-100">Templates</a>
                    </li> */}
                </ul>
                <div className="flex items-center justify-center gap-6 my-8">
                    <a href="https://linkedin.com/in/zulfahmidev" aria-label="Linkedin" className="opacity-50 hover:opacity-100"><FaLinkedinIn className="text-2xl" /></a>
                    <a href="https://github.com/zulfahmidev" aria-label="Github" className="opacity-50 hover:opacity-100"><FaGithub className="text-2xl" /></a>
                    <a href="https://instagram.com/zulfahmi4_" aria-label="Instagram" className="opacity-50 hover:opacity-100"><FaInstagram className="text-2xl" /></a>
                </div>
                <div className="text-center opacity-50">
                    &copy; 2025 <a href="https://zulfahmidev.com" className="font-bold">Zulfahmidev</a>, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}