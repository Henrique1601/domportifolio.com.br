import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowUpRight } from '@phosphor-icons/react'

export function Hero() {
  const titleReveal = useScrollReveal()

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-28 pb-24 overflow-hidden"
    >
      <div className="container-main w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7" ref={titleReveal.ref}>
          <div
            className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              titleReveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
            }`}
          >
            <span className="eyebrow bg-accent/10 text-accent mb-6">Design & Ilustração</span>

            <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-text mt-4 mb-6">
              Daniel — Criando <span className="italic text-accent">narrativas visuais</span> que conectam
            </h1>

            <p className="text-text-muted text-lg leading-relaxed max-w-[520px] mb-10">
              Designer e Ilustrador especializado em identidade visual, ilustração digital e design gráfico. Transformo ideias em experiências visuais que comunicam e inspiram.
            </p>

            <a
              href="#about"
              className="button-island bg-text text-white group"
            >
              <span>Conheça meu trabalho</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 group-active:scale-[0.98]">
                <ArrowUpRight size={14} weight="bold" className="text-white" />
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="double-bezel p-1.5">
            <div className="double-bezel-inner overflow-hidden">
              <img
                src="/assets/images/Logo.png"
                alt="Daniel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
