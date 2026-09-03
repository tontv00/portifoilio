import Container from "./Container";
import Badge from "./Badge";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Commerce",
    description:
      "Aplicação de e-commerce desenvolvida para simular uma experiência de comércio eletrônico, explorando desenvolvimento web, organização de código, responsividade e interação com produtos.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python"],
    features: [
      "Visualização e navegação de produtos",
      "Busca e interação com produtos",
      "Interface responsiva",
      "Foco em usabilidade",
    ],
    github: "https://github.com/tontv00/commerce",
    featured: true,
  },
  {
    title: "Social Network",
    description:
      "Aplicação web que simula uma rede social, com cadastro de usuários, autenticação, publicação de posts e feed de conteúdo.",
    technologies: ["HTML5", "CSS3", "Python"],
    features: [
      "Cadastro e login",
      "Publicação de posts",
      "Feed de publicações",
      "Layout responsivo",
    ],
    github: "",
  },
  {
    title: "Wiki Page",
    description:
      "Aplicação web inspirada na Wikipédia, desenvolvida para explorar criação, edição, busca e organização de conteúdos por temas.",
    technologies: ["Python", "HTML", "CSS"],
    features: [
      "Busca de conteúdos",
      "Criação e edição de páginas",
      "Organização por temas",
      "Página aleatória",
    ],
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24">
      <Container>
        <div className="max-w-2xl">
          <Badge>Projetos</Badge>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projetos que transformam aprendizado em prática.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Uma seleção de aplicações desenvolvidas durante minha evolução em
            desenvolvimento de software e Engenharia de Software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}