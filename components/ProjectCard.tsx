type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Badge */}
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          Featured Project
        </span>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-sm
                font-medium
                text-blue-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-auto pt-8">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              rounded-lg
              bg-blue-600
              px-5
              py-3
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
            "
          >
            View Repository →
          </a>
        </div>
      </div>
    </div>
  );
}