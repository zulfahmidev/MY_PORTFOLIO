import AboutMe from "@/components/layout/about-me";
import ContactMe from "@/components/layout/contact-me";
import { Header } from "@/components/layout/header";
import { Templates } from "@/components/layout/templates";
import Workspace from "@/components/layout/workspace";
import { ReadData } from "@/lib/helper";
import { Suspense } from "react";

export default async function Home() {
  const projects = await ReadData('projects.json')
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<>Loading...</>}>
          <AboutMe />
          <Workspace projects={projects} />
          {/* <Apps /> */}
          {/* <Blog /> */}
          {/* <Templates /> */}
          <ContactMe />
        </Suspense>
      </main>
    </>
  );
}
