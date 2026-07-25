import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Some of the projects that reflect my learning journey in database
            administration, web development, and machine learning.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}