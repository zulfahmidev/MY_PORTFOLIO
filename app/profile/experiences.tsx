interface Experience {
    Company: string
    Position: string
    Location: string
    Estimate: string
    Description: string[]
}

const experiences: Experience[] = [
    {
        Company: 'PT. Guardia Teknologi Indonesia',
        Location: 'Jakarta Pusat, Jakarta',
        Position: 'Full Stack Developer',
        Estimate: 'Oct 2025 - Present',
        Description: [
            '-'
        ]
    },
    {
        Company: 'PT. Super Pasar Rakyat Indonesia',
        Location: 'Jakarta Pusat, Jakarta',
        Position: 'Backend Developer',
        Estimate: 'Oct 2024 - Oct 2025',
        Description: [
            'Developed and maintained the backend of the Localoka application, which has over 100,000 active users, using a microservices architecture with Python Flask, and built the backend of Localoka V2 using Golang with a microservices architecture.',
            'Resolved critical bugs such as failed coin withdrawal, shipment tracking errors, and others',
            'Implemented new features such as branch store management, flash withdrawal, and branch store withdrawal to support multi-location operations',
            'Integrated Indonesia POS shipping API as a delivery method within the Localoka application',
            'Fixed and implemented an integrated CI/CD pipeline with Docker to streamline the deployment process',
            'Acted as Scrum Master, managing sprint planning, task allocation, and progress monitoring of the Localoka development team'
        ]
    },
    {
        Company: 'PT. Sekawan Media Informatika',
        Location: 'Malang, Jawa Timur',
        Position: 'Full Stack Developer',
        Estimate: 'Oct 2023 - Mar 2024',
        Description: [
            'Developed the Zavis V oucher information system using Laravel and MySQL, and the HRIS information system using Next.js/React.js, Laravel, and MySQL',
            'Performed several enhancements, including backend refactoring, layout improvements, and adding new components and pages to both the Zavis V oucher and HRIS information systems',
        ]
    },
    {
        Company: 'CV. Naistudio',
        Location: 'Metro, Lampung',
        Position: 'Student Trainee',
        Estimate: 'Nov 2019 - Dec 2019',
        Description: [
            'Develop Flappy Bird and Go Chess games using JavaScript and applied object-oriented programming (OOP) concepts.',
            'Develop a backend REST API for a ticketing information system using Laravel.',
            'Develop the frontend of a ticketing information system website using Vue.js and how to consume the backend API.',
            'Develop custom WordPress template using the Blankslate theme.',
            'Completed several simple challenges such as creating a cube with CSS and HTML, manipulating images using PHP GD, building a countdown timer, and more.',
        ]
    },
]

function ExperienceCard({data} : {data: Experience}) {
    return (
        <article>
            <h3 className="text-2xl font-semibold">{data.Company}</h3>
            <h4 className="font-semibold">{data.Position}</h4>
            <div className="flex gap-3 items-center">
                <span>{data.Location}</span>
                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                <time dateTime={data.Estimate}>{data.Estimate}</time>
            </div>
            <ul className="list-disc px-6 text-foreground/80 mt-3">
                {
                    data.Description.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default function Experiences() {
    return (
        <section className="py-8" aria-labelledby="experiences-title">
            <div className="container mx-auto px-5 lg:px-0">
                <header className="py-2 px-4 rounded-full border border-foreground/15 w-fit mx-auto">
                    <h2 id="experiences-title">Work Experiences</h2>
                </header>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        experiences.map((v, i) => (
                            <ExperienceCard key={i} data={v} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}