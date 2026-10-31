import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import {
  getExperiences,
  getFeaturedProjects,
  getProfile,
  getSkills,
} from "@/sanity/lib/data";

export default async function Home() {
  const [profile, projects, skills, experiences] = await Promise.all([
    getProfile(),
    getFeaturedProjects(),
    getSkills(),
    getExperiences(),
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar profile={profile} />
      <main id="main-content" className="flex-1">
        <Hero profile={profile} hasProjects={projects.length > 0} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
