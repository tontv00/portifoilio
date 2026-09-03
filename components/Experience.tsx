import Container from "./Container";
import Badge from "./Badge";

const experiences = [
  {
    period: "2025 — Atual",
    company: "Teleperformance",
    role: "Content Moderator",
    description:
      "Atuação em moderação de conteúdo digital, seguindo políticas e diretrizes para análise de conteúdos em ambientes online.",
    skills: ["Content Moderation", "Compliance", "English", "Analysis"],
  },
  {
    period: "Anterior",
    company: "Audac",
    role: "Supervisor",
    description:
      "Experiência em gestão de pessoas e acompanhamento de operações, desenvolvendo competências de liderança, comunicação e tomada de decisão.",
    skills: ["Leadership", "People Management", "Communication", "Operations"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24">
      <Container>
        <div className="max-w-2xl">
          <Badge>Experiência</Badge>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Minha trajetória profissional.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Experiências que contribuíram para minha evolução profissional e
            para a construção da minha trajetória em tecnologia.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Linha da timeline */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-slate-800 sm:block" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="relative sm:pl-10"
              >
                {/* Ponto da timeline */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.45)] sm:block" />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-cyan-400">
                        {experience.company}
                      </p>
                    </div>

                    <span className="text-sm text-slate-500">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-400">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}