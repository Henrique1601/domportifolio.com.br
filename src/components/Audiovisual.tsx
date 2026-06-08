import { useScrollReveal } from '@/hooks/useScrollReveal'

const projects = ['Projeto 01', 'Projeto 02', 'Projeto 03']

export function Audiovisual() {
  const titleReveal = useScrollReveal()

  return (
    <section id="av" className="py-28 md:py-36 bg-bg-alt">
      <div className="container-main">
        <div
          ref={titleReveal.ref}
          className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            titleReveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Audiovisual</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-12">
            Motion & <span className="text-accent">Vídeo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <AVCard key={p} label={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AVCard({ label, index }: { label: string; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`double-bezel p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="double-bezel-inner aspect-[16/10] flex items-center justify-center p-2">
        <span className="text-text-muted text-sm font-medium">{label}</span>
      </div>
    </div>
  )
}
