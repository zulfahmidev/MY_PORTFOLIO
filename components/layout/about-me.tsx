import Link from "next/link";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function AboutMe({isAboutPage=false} : {isAboutPage?: boolean}) {
    return (
        <section className="pt-16">
            <div className="container mx-auto py-16 px-5 lg:px-0" id="about">
                <h1 className="text-center text-5xl font-semibold text-primary">{"Hi, I'm Zulfahmi"}</h1>
                <p className="text-3xl lg:text-5xl text-center my-8">A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.</p>
                {
                    isAboutPage ? (
                        <a href="/CV-Zulfahmi-Software-Engineer.pdf" className="py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold w-fit mx-auto transition-transform duration-300 ease-in-out hover:scale-110" download>
                            <span>Download CV</span>
                            <FaDownload />
                        </a>
                    ) : (
                        <Link href="/profile" className="py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold w-fit mx-auto transition-transform duration-300 ease-in-out hover:scale-110">
                            <span>See My Profile</span>
                            <FaArrowRight />
                        </Link>
                    )
                }
                <div className="container mx-auto flex justify-center flex-wrap gap-6 px-5 lg:px-0 mt-8">
                    <div className="w-64 text-center">
                        <div className="text-6xl py-3">20+</div>
                        <p className="text-lg">I have completed the project</p>
                    </div>
                    <div className="w-64 text-center">
                        <div className="text-6xl py-3">5+</div>
                        <p className="text-lg">Companies are satisfied with my work</p>
                    </div>
                    <div className="w-64 text-center">
                        <div className="text-6xl py-3">5+</div>
                        <p className="text-lg">Years of experiences</p>
                    </div>
                </div>
            </div>
        </section>
    )
}