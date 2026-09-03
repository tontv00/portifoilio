import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Wellington Silva. Todos os direitos reservados.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/tontv00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tontv00/"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}