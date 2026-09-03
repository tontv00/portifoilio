import Container from "./Container";
import Badge from "./Badge";

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          
          {/* Conteúdo */}
          <div>
            <Badge>Sobre mim</Badge>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Construindo minha carreira através da tecnologia.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-slate-400">
              <p>
                Sou estudante de Engenharia de Software e profissional com
                experiência em ambientes digitais, atendimento e moderação de
                conteúdo. Atualmente direciono minha carreira para tecnologia
                e desenvolvimento de software, unindo minha experiência
                profissional com uma formação voltada à construção de soluções
                digitais.
              </p>

              <p>
                Tenho interesse especial por desenvolvimento web, cloud e
                tecnologias modernas, e venho desenvolvendo projetos próprios
                para transformar conhecimento técnico em aplicações reais.
              </p>

              <p>
                Minha experiência em ambientes de alta demanda também
                fortaleceu competências como comunicação, análise, tomada de
                decisão e resolução de problemas — habilidades que levo para
                minha evolução como profissional de tecnologia.
              </p>
            </div>
          </div>

          {/* Destaques */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors duration-300 hover:border-cyan-500/40">
              <p className="text-sm font-medium text-cyan-400">
                Formação
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Engenharia de Software
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors duration-300 hover:border-cyan-500/40">
              <p className="text-sm font-medium text-cyan-400">
                Foco
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Desenvolvimento Web
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors duration-300 hover:border-cyan-500/40">
              <p className="text-sm font-medium text-cyan-400">
                Comunicação
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Português & Inglês
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors duration-300 hover:border-cyan-500/40">
              <p className="text-sm font-medium text-cyan-400">
                Interesse
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Cloud & Tecnologia
              </h3>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}