import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import ProjectGallery from "../components/ProjectGallery";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center px-5 text-center">
        <div>
          <p className="title-font text-4xl">Project not found</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-2 text-sm font-medium text-neutral-700 ring-1 ring-black/10 transition hover:bg-white hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <section className="glass mt-6 overflow-hidden rounded-[32px] p-5 sm:p-8 md:rounded-[40px] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="grid size-20 place-items-center rounded-3xl bg-white/75 p-4 shadow-sm ring-1 ring-black/5 sm:size-24">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h1 className="title-font mt-8 text-5xl leading-none sm:text-6xl md:text-7xl">
                {project.name}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                {project.description}
              </p>
            </div>

            <div className="rounded-[28px] bg-white/45 p-5 ring-1 ring-black/5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Stack
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/75 px-3 py-1.5 text-sm text-neutral-700 ring-1 ring-black/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProjectGallery images={project.gallery} title={project.name} />

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Highlights
            </p>
            <h2 className="title-font mt-3 text-4xl sm:text-5xl">
              What it does
            </h2>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature: string) => (
              <li
                key={feature}
                className="rounded-2xl bg-white/45 px-4 py-3 text-sm leading-relaxed text-neutral-700 ring-1 ring-black/5 sm:text-base"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <ExternalLink className="size-4" />
            Live Website
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition hover:border-black hover:bg-white/50"
          >
            <FaGithub className="size-4" />
            GitHub Repo
          </a>
        </div>
      </div>
    </main>
  );
}
