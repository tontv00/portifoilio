import Container from "./Container";
import Badge from "./Badge";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen bg-slate-950 pt-24">
      <Container>
        <div className="flex min-h-[80vh] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Avatar */}
          <div className="flex shrink-0 justify-center">
            <Avatar />
          </div>

          {/* Conteúdo */}
          <div className="max-w-3xl text-center lg:text-left">
            <p className="font-medium text-cyan-400">
              Olá, eu sou
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl">
              Wellington Silva
            </h1>

            <h2 className="mt-4 text-2xl text-slate-300">
              Full Stack Developer
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 lg:mx-0">
              Desenvolvo aplicações modernas utilizando React, Next.js,
              TypeScript e Node.js, focando em performance, experiência do
              usuário e código de qualidade.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Ver Projetos
              </a>

              <a
                href="/curriculo.pdf"
                className="rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Baixar CV
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}