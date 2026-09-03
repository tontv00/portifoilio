type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  features,
  github,
  demo,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group rounded-2xl border bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
          : "border-slate-800 hover:border-cyan-500/30"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {featured && (
            <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
              Projeto em destaque
            </span>
          )}

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>

        <div className="text-slate-600 transition-colors duration-300 group-hover:text-cyan-400">
          ↗
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Tecnologias
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Destaques
        </p>

        <ul className="mt-3 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 text-sm text-slate-400"
            >
              <span className="text-cyan-400">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex gap-4 border-t border-slate-800 pt-5">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
          >
            GitHub ↗
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}