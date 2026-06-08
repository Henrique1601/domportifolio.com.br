import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'

const links = [
  { href: '#about', label: 'Quem Sou Eu' },
  { href: '#education', label: 'Formação' },
  { href: '#illustration', label: 'Ilustração' },
  { href: '#design', label: 'Design | UX' },
  { href: '#branding', label: 'ID Visual' },
  { href: '#av', label: 'Audiovisual' },
  { href: '#contact', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? 'pt-3' : 'pt-6'
        }`}
      >
        <div
          className={`flex items-center justify-between w-max min-w-[320px] md:min-w-[480px] px-5 h-14 rounded-full backdrop-blur-2xl border border-white/20 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? 'bg-white/85 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]'
              : 'bg-white/70'
          }`}
        >
          <a href="#hero" className="font-heading font-semibold text-base tracking-tight text-text no-underline">
            Daniel<span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted no-underline text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black/10 cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true">{open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navegação do portfólio"
        className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(48px)', WebkitBackdropFilter: 'blur(48px)', background: 'rgba(253,251,247,0.92)' }}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-12 opacity-0 blur-sm'
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-4xl md:text-5xl font-semibold text-text no-underline tracking-tight transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
