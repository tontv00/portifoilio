import Container from "./Container";
import Badge from "./Badge";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <Container>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-16 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <Badge>Contato</Badge>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vamos construir algo incrível juntos.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Estou sempre aberto a novas oportunidades, projetos e conversas
              sobre tecnologia. Se você acredita que podemos trabalhar juntos,
              fique à vontade para entrar em contato.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:ton.ifba1@gmail.com"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
              >
                Entrar em contato
              </a>

              <a
                href="https://github.com/tontv00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/tontv00/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}