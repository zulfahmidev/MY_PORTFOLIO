import Image from "next/image";

export default function Education() {
    return (
        <section className="py-8" aria-labelledby="education-title">
            <div className="container mx-auto px-5 lg:px-0">
                <header className="py-2 px-4 rounded-full border border-foreground/15 w-fit mx-auto">
                    <h2 id="education-title" className="text-xl">Education</h2>
                </header>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
                        <Image
                            src="/assets/gambar-kampus-politeknik-negeri-lhokseumawe.png"
                            alt="Politeknik Negeri Lhokseumawe campus building"
                            className="object-cover w-full h-full"
                            fill
                        />
                    </div>
                    <div className="py-3">
                        <h3 className="text-2xl font-semibold">Politeknik Negeri Lhokseumawe</h3>
                        <h4 className="font-semibold">Teknologi Rekayasa Komputer Jaringan - S.Tr.T</h4>
                        <div className="flex gap-3 items-center">
                            <p>GPA <strong>3.72 / 4.0</strong></p>
                            <div className="w-1 h-1 rounded-full bg-foreground"></div>
                            <time dateTime="2020-09">Sep 2020</time> - <time dateTime="2024-10">Oct 2024</time>
                        </div>
                        <ul className="list-disc px-6 text-foreground/80 mt-3 leading-relaxed">
                            <li>{`Completed a final project titled "Implementation of Document Storage Using Google Cloud Storage in the Vocaject Application".`}</li>
                            <li>Served as Chairman of the student organization Polytechnic Linux Community (UKM POLICY) for the 2022-2023 period.</li>
                            <li>Achieved 3rd place in Hackathon category at the 5th National Informatics Student Competition (2023) with Vocaject app (Laravel, Vue, Flutter, MySQL) as Full Stack Developer and Team Leader.</li>
                            <li>Participated in the Studi Independent program under Bangkit Academy led by Google, Gojek, and Traveloka; acted as Project Manager to build Pos Kopi app (Flutter, Vue.js, Laravel, MySQL).</li>
                            <li>Developed the official website of UKM POLICY for portfolio and organizational management using Laravel and MySQL.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}