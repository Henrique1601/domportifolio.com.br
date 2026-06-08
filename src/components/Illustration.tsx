import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Illustration() {
  const reveal = useScrollReveal()

  return (
    <section id="illustration" className="py-28 md:py-36">
      <div className="container-main">
        <div
          ref={reveal.ref}
          className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            reveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Ilustração</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-12">
            Galeria de <span className="text-accent">Ilustrações</span>
          </h2>
        </div>

        <div className="double-bezel p-1.5">
          <div className="double-bezel-inner overflow-hidden p-2">
            <img
              src="/assets/images/secao Ilustracao.png" loading="lazy"
              alt="Seção Ilustração"
              className="w-full rounded-xl object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
