import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="rounded-lg text-xl font-bold text-white transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Wellington.dev
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden gap-8 text-slate-300 md:flex"
          >
            <a
              href="/curriculo.pdf"
              className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Currículo
            </a>

            <a
              href="#about"
              className="rounded-lg transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Sobre
            </a>

            <a
              href="#skills"
              className="rounded-lg transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="rounded-lg transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Projetos
            </a>

            <a
              href="#contact"
              className="rounded-lg transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Contato
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}