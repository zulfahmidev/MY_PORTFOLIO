import { FaSmile } from "react-icons/fa";
import TechStack from "./tech-stack";

export default function Skills() {
    return (
        <section className="py-8" aria-labelledby="skills-title">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="py-2 px-4 rounded-full border border-foreground/15 w-fit mx-auto">
                    <h2 id="skills-title">Skills And Tools</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">

                    <article className="bg-primary/25 p-8 rounded-lg">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-3xl">
                            <FaSmile />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold">Fullstack Web</h3>
                            <p className="text-foreground/80">Bangun aplikasi web end-to-end, integrasi backend–frontend, fokus pada performa, keamanan, dan skalabilitas.</p>
                        </div>
                    </article>

                    <article className="bg-primary/25 p-8 rounded-lg">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-3xl">
                            <FaSmile />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold">Backend APIs</h3>
                            <p className="text-foreground/80">Kembangkan RESTful & GraphQL API, autentikasi aman, error handling rapi, dan integrasi lintas platform.</p>
                        </div>
                    </article>

                    <article className="bg-primary/25 p-8 rounded-lg">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-3xl">
                            <FaSmile />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold">Frontend Web</h3>
                            <p className="text-foreground/80">Buat UI modern dengan React/Vue, responsif, interaktif, fokus pada pengalaman pengguna terbaik.</p>
                        </div>
                    </article>

                    <article className="bg-primary/25 p-8 rounded-lg">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-3xl">
                            <FaSmile />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold">Frontend Mobile</h3>
                            <p className="text-foreground/80">Bangun aplikasi mobile Flutter, cross-platform, ringan, responsif, terintegrasi dengan backend API.</p>
                        </div>
                    </article>

                </div>
                <div className="mt-6">
                    <TechStack />
                </div>
            </div>
        </section>
    )
}