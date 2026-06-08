import { useScrollReveal } from '@/hooks/useScrollReveal'

const items = [
  {
    year: 'Cursando',
    title: 'Publicidade',
    institution: 'UNIASSELVI',
    desc: 'Estudante de Publicidade, aprimorando habilidades em comunicação visual, branding e estratégias de comunicação.',
  },
  {
    year: 'Concluído',
    title: 'Design Gráfico & Branding',
    institution: 'Formação complementar',
    desc: 'Fundamentos de design, identidade visual, tipografia, teoria das cores e branding.',
  },
  {
    year: 'Concluído',
    title: 'Ilustração Digital',
    institution: 'Formação complementar',
    desc: 'Ilustração digital focada em narrativa visual, luz, sombra e composição.',
  },
]

export function Education() {
  const titleReveal = useScrollReveal()

  return (
    <section id="education" className="py-28 md:py-36 bg-bg-alt">
      <div className="container-main">
        <div
          ref={titleReveal.ref}
          className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            titleReveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Formação</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-12">
            Educação & <span className="italic text-accent">Cursos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <EducationCard item={items[0]} index={0} />
          </div>
          {items.slice(1).map((item, i) => (
            <EducationCard key={item.title} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ item, index }: { item: (typeof items)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`double-bezel p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="double-bezel-inner p-6 md:p-8">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-2 block">
          {item.year}
        </span>
        <h3 className="font-heading text-xl font-semibold text-text mb-1">
          {item.title}
        </h3>
        <span className="text-text-muted text-sm block mb-3">{item.institution}</span>
        <p className="text-text-muted text-[15px] leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}
