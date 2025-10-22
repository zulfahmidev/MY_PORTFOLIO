import AboutMe from "@/components/layout/about-me";
import Education from "./education";
import Skills from "./skills";
import Experiences from "./experiences";

export const metadata = {
  title: "Profile",
  openGraph: {
    url: "https://zulfahmidev.com/profile",
    title: "Profile - Zulfahmidev",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Zulfahmi",
      url: "https://zulfahmidev.com/profile",
      description:
        "A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Politeknik Negeri Lhokseumawe",
        sameAs: "https://pnl.ac.id/",
      },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Full Stack Developer",
          employer: {
            "@type": "Organization",
            name: "PT. Guardia Teknologi Indonesia",
          },
          startDate: "2025-10",
        },
        {
          "@type": "Occupation",
          name: "Backend Developer",
          employer: {
            "@type": "Organization",
            name: "PT. Super Pasar Rakyat Indonesia",
          },
          startDate: "2024-10",
          endDate: "2025-10",
        },
        {
          "@type": "Occupation",
          name: "Full Stack Developer",
          employer: {
            "@type": "Organization",
            name: "PT. Sekawan Media Informatika",
          },
          startDate: "2023-10",
          endDate: "2024-03",
        },
        {
          "@type": "Occupation",
          name: "Student Trainee",
          employer: {
            "@type": "Organization",
            name: "CV. Naistudio",
          },
          startDate: "2019-11",
          endDate: "2019-12",
        },
      ],
      knowsAbout: [
        "Fullstack Web Development",
        "Backend API Development",
        "Frontend Development (React, Vue)",
        "Mobile App Development (Flutter)",
        "REST API",
        "GraphQL",
        "CI/CD",
        "Docker",
        "Laravel",
        "Next.js",
        "Golang",
        "MySQL",
      ],
      skill: [
        "Fullstack Web Development",
        "Backend APIs",
        "Frontend Web",
        "Frontend Mobile",
      ],
    }),
  },
  alternates: {
    canonical: "https://zulfahmidev.com/profile",
  },
}

export default function ProfilePage() {
    return (
        <>
            <AboutMe isAboutPage={true} />
            <Skills />
            <Education />
            <Experiences />
        </>
    )
}