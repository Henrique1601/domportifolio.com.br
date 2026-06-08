import { useScrollReveal } from '@/hooks/useScrollReveal'

export function About() {
  const reveal = useScrollReveal()

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container-main">
        <div
          ref={reveal.ref}
          className={`max-w-3xl mx-auto transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            reveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Quem Sou Eu</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-10">
            Sobre <span className="italic text-accent">mim</span>
          </h2>
          <div className="double-bezel p-2">
            <div className="double-bezel-inner p-8 md:p-10 space-y-5">
              <p className="text-text-muted text-[15px] md:text-base leading-relaxed">
                Como Designer e Ilustrador, colaboro na criação de peças digitais, layouts e materiais alinhados à identidade visual de marcas, além de desenvolver ilustrações que combinam luz, cor e narrativa visual. Meu trabalho também inclui a produção de identidades visuais completas e o gerenciamento de pequenos projetos, sempre aplicando fundamentos de design e branding.
              </p>
              <p className="text-text-muted text-[15px] md:text-base leading-relaxed">
                Atualmente sou estudante de <strong className="text-text font-semibold">Publicidade pela UNIASSELVI</strong>, onde continuo aprimorando minhas habilidades em comunicação visual.
              </p>
              <p className="text-text-muted text-[15px] md:text-base leading-relaxed">
                No setor administrativo, atuo no <strong className="text-text font-semibold">Hospital Ana Costa</strong> como <strong className="text-text font-semibold">Assistente de Contas Médicas</strong>, focando na auditoria de faturamento, validação de notas fiscais e suporte ao fechamento mensal. Minha experiência organizacional e analítica fortalece minha prática criativa, permitindo que eu una precisão técnica e sensibilidade estética em projetos de design e ilustração.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
