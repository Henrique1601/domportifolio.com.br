import { useEffect, useRef, useState } from 'react'

export function useParallax() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})

  useEffect(() => {
    const aboutSection = document.getElementById('about')
    const heroImage = imageRef.current
    if (!aboutSection || !heroImage) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const aboutTop = aboutSection.offsetTop
      const progress = Math.min(scrollY / aboutTop, 1)

      const logoRect = heroImage.getBoundingClientRect()
      const targetElement = aboutSection.querySelector('.section-title')

      if (targetElement) {
        const targetRect = targetElement.getBoundingClientRect()
        const targetTop = targetRect.top
        const offsetY = (targetRect.height - logoRect.height) / 2
        const desiredLeft = targetRect.right + 15
        const desiredTop = targetTop + offsetY

        const translateX = desiredLeft - logoRect.left
        const translateY = desiredTop - logoRect.top

        setStyle({
          transform: `translate(${translateX * progress}px, ${translateY * progress}px) scale(${1 + progress * 0.2})`,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { imageRef, style }
}
