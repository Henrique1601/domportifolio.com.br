import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'Camookie',
    desc: 'Projeto completo de identidade visual para a marca Camookie, incluindo logotipo, paleta de cores, tipografia institucional e materiais gráficos. Uma identidade que traduz a personalidade única da marca através de elementos visuais estratégicos.',
    img: '/assets/images/Projeto camookie.png',
    tag: 'Branding',
  },
  {
    title: 'Moves Dance',
    desc: 'Quem somos? A Moves é um coletivo de dança que acredita no movimento como forma de expressão, conexão e transformação. Atuamos com aulas presenciais e videoaulas para todas as idades, unindo técnica, criatividade e acessibilidade. Nosso objetivo é democratizar a dança, criando um espaço onde qualquer pessoa — do iniciante ao avançado — possa evoluir, se expressar e fazer parte de uma comunidade que vive a dança de forma intensa e verdadeira.',
    img: '/assets/images/moves dance.png',
    tag: 'Branding',
  },
]

export function Branding() {
  const reveal = useScrollReveal()

  return (
    <section id="branding" className="py-28 md:py-36 bg-bg-alt">
      <div className="container-main">
        <div
          ref={reveal.ref}
          className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            reveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Identidade Visual</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-12">
            Projetos de <span className="text-accent">Branding</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardReveal = useScrollReveal()

  return (
    <div
      ref={cardReveal.ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        cardReveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
      }`}
    >
      <div className="double-bezel p-1.5">
        <div className="double-bezel-inner p-8 md:p-10 flex flex-col justify-center h-full">
          <h3 className="font-heading text-2xl font-semibold text-text mb-3">{project.title}</h3>
          <p className="text-text-muted text-[15px] md:text-base leading-relaxed mb-6 whitespace-pre-line">
            {project.desc}
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <span className="eyebrow bg-accent/10 text-accent">{project.tag}</span>
            <a
              href="#"
              className="button-island bg-text/5 text-text group text-xs ml-auto"
            >
              <span>Ver projeto</span>
              <span className="w-6 h-6 rounded-full bg-text/5 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:scale-[0.98]" aria-hidden="true">
                <ArrowUpRight size={12} weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="double-bezel p-1.5">
        <div className="double-bezel-inner overflow-hidden p-2 h-full">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
