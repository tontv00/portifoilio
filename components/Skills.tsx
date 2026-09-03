import Container from "./Container";
import Badge from "./Badge";

const skillGroups = [
  {
    title: "Development",
    description: "Tecnologias utilizadas na construção de aplicações web.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Python"],
  },
  {
    title: "Cloud",
    description: "Conhecimentos e estudos em plataformas de computação em nuvem.",
    skills: ["Microsoft Azure", "AWS", "Oracle Cloud"],
  },
  {
    title: "Tools",
    description: "Ferramentas utilizadas no desenvolvimento e versionamento.",
    skills: ["Git", "GitHub", "VS Code", "ESLint", "Tailwind CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <Container>
        <div className="max-w-2xl">
          <Badge>Skills</Badge>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tecnologias e ferramentas.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Um conjunto de tecnologias que venho utilizando e estudando ao
            longo da minha formação em Engenharia de Software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-cyan-500/40 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}