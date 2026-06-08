import { useScrollReveal } from '@/hooks/useScrollReveal'

export function DesignUX() {
  const reveal = useScrollReveal()

  return (
    <section id="design" className="py-28 md:py-36">
      <div className="container-main">
        <div
          ref={reveal.ref}
          className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            reveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Design | UX</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-12">
            Experiência & <span className="text-accent">Interface</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 double-bezel p-1.5">
            <div className="double-bezel-inner p-8 md:p-10 flex flex-col justify-center">
              <p className="text-text-muted text-[15px] md:text-base leading-relaxed mb-5">
                Projetos de design digital e experiência do usuário, combinando pesquisa, prototipação e design visual para criar interfaces funcionais e esteticamente alinhadas aos objetivos de cada marca.
              </p>
              <p className="text-text-muted text-[15px] md:text-base leading-relaxed mb-6">
                Do wireframe ao protótipo navegável, cada projeto é pensado para proporcionar uma experiência fluida e intuitiva.
              </p>
              <span className="eyebrow bg-accent/10 text-accent self-start">
                UX/UI Design
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 double-bezel p-1.5">
            <div className="double-bezel-inner overflow-hidden p-2 h-full">
              <img
                src="/assets/images/Secao design ux .png" loading="lazy"
                alt="Seção Design UX"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
