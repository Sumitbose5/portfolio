import type { Project } from "../types/project";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass group rounded-[28px] p-5 sm:p-6 flex h-full flex-col overflow-hidden"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white/70 p-3 shadow-sm ring-1 ring-black/5">
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <ArrowUpRight
          className="mt-1 size-5 text-neutral-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
          aria-hidden="true"
        />
      </div>

      <h2 className="title-font mt-7 text-3xl sm:text-4xl leading-tight">
        {project.name}
      </h2>

      <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/65 px-3 py-1 text-xs sm:text-sm text-neutral-700 ring-1 ring-black/5"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-medium underline-offset-4 hover:underline"
      >
        View Details
      </Link>
    </motion.div>
  );
}
