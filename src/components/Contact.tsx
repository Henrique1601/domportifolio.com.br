import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useToast } from '@/components/Toast'
import { sendEmail } from '@/lib/emailjs'
import { WhatsappLogo, EnvelopeSimple, LinkedinLogo, InstagramLogo, ArrowUpRight } from '@phosphor-icons/react'

const links = [
  {
    icon: WhatsappLogo,
    title: 'WhatsApp',
    info: '(11) 98848-0366',
    href: 'https://wa.me/5511988480366',
  },
  {
    icon: EnvelopeSimple,
    title: 'E-mail',
    info: 'danieuson.info@gmail.com',
    href: 'mailto:danieuson.info@gmail.com',
  },
  {
    icon: InstagramLogo,
    title: 'Instagram',
    info: '@inusitadom',
    href: 'https://instagram.com/inusitadom',
  },
  {
    icon: InstagramLogo,
    title: 'Instagram',
    info: '@desenrolarte',
    href: 'https://instagram.com/desenrolarte',
  },
  {
    icon: LinkedinLogo,
    title: 'LinkedIn',
    info: '/in/inusitadom',
    href: 'https://www.linkedin.com/in/inusitadom/',
  },
]

export function Contact() {
  const toast = useToast()
  const titleReveal = useScrollReveal()
  const formReveal = useScrollReveal()

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container-main">
        <div
          ref={titleReveal.ref}
          className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            titleReveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
          }`}
        >
          <span className="eyebrow bg-accent/10 text-accent mb-6">Contato</span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-text mb-12">
            Vamos <span className="text-accent">conversar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={`${link.title}-${link.info}`}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="double-bezel p-1.5 no-underline group transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
              >
                <div className="double-bezel-inner p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-accent/10" aria-hidden="true">
                    <link.icon size={16} className="text-accent" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <span className="font-heading text-sm font-semibold text-text">{link.title}</span>
                    <span className="text-text-muted text-[13px]">{link.info}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-text-muted transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          <div
            ref={formReveal.ref}
            className={`lg:col-span-3 double-bezel p-1.5 transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              formReveal.isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
            }`}
          >
            <form
              className="double-bezel-inner p-6 md:p-8 flex flex-col gap-4"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                form.setAttribute('aria-busy', 'true')
                const btn = form.querySelector('button') as HTMLButtonElement
                btn.disabled = true
                btn.innerHTML = '<span class="flex items-center gap-2"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>Enviando...</span>'
                try {
                  await sendEmail(form)
                  toast.show('Mensagem enviada com sucesso!', 'success')
                  form.reset()
                } catch {
                  toast.show('Erro ao enviar. Tente novamente.', 'error')
                }
                btn.disabled = false
                form.setAttribute('aria-busy', 'false')
                btn.innerHTML = '<span>Enviar Mensagem</span><span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 group-active:scale-[0.98]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="none" class="text-white"><path d="M200 64v104a8 8 0 01-16 0V83.31L69.66 197.66a8 8 0 01-11.32-11.32L172.69 72H88a8 8 0 010-16h104a8 8 0 018 8z" fill="currentColor"/></svg></span>'
              }}
            >
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                aria-label="Seu nome"
                required
                className="w-full px-5 py-3.5 bg-transparent border border-border rounded-xl text-text text-sm outline-none transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/30 focus:bg-accent/[0.02] placeholder:text-text-muted/50"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                aria-label="Seu e-mail"
                required
                className="w-full px-5 py-3.5 bg-transparent border border-border rounded-xl text-text text-sm outline-none transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/30 focus:bg-accent/[0.02] placeholder:text-text-muted/50"
              />
              <input
                type="text"
                name="assunto"
                placeholder="Assunto"
                aria-label="Assunto"
                className="w-full px-5 py-3.5 bg-transparent border border-border rounded-xl text-text text-sm outline-none transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/30 focus:bg-accent/[0.02] placeholder:text-text-muted/50"
              />
              <textarea
                name="mensagem"
                placeholder="Sua mensagem..."
                aria-label="Sua mensagem"
                required
                className="w-full px-5 py-3.5 bg-transparent border border-border rounded-xl text-text text-sm outline-none transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/30 focus:bg-accent/[0.02] placeholder:text-text-muted/50 min-h-[120px] resize-y"
              />
              <button
                type="submit"
                className="button-island bg-text text-white self-start group mt-2"
              >
                <span>Enviar Mensagem</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 group-active:scale-[0.98]" aria-hidden="true">
                  <ArrowUpRight size={14} weight="bold" className="text-white" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
