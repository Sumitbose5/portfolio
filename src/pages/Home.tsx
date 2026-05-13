import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
      >
        <div className="mb-10 flex flex-col gap-3 sm:mb-14 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Selected Work
          </p>

          <h2 className="title-font text-4xl leading-tight sm:text-5xl md:text-6xl">
          Projects
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 md:px-8 md:pb-24"
      >
        <div className="glass rounded-[32px] p-6 sm:p-10 md:rounded-[40px] md:p-20">
          <h2 className="title-font text-4xl sm:text-5xl md:text-6xl">
            Contact
          </h2>

          <div className="mt-8 flex flex-col gap-5 text-base sm:mt-10 sm:text-lg">
            <a
              href="mailto:yourmail@gmail.com"
              className="flex min-w-0 items-center gap-4 break-all rounded-2xl bg-white/35 px-4 py-3 ring-1 ring-black/5 transition hover:bg-white/55"
            >
              <FaEnvelope />
              sumitkrbose05@gmail.com
            </a>

            <a
              href="https://github.com/Sumitbose5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/35 px-4 py-3 ring-1 ring-black/5 transition hover:bg-white/55"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sumit-bose-3b65a5275/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/35 px-4 py-3 ring-1 ring-black/5 transition hover:bg-white/55"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
