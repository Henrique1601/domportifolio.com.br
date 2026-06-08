import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Education } from '@/components/Education'
import { Illustration } from '@/components/Illustration'
import { DesignUX } from '@/components/DesignUX'
import { Branding } from '@/components/Branding'
import { Audiovisual } from '@/components/Audiovisual'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ToastProvider } from '@/components/Toast'

function App() {
  return (
    <ToastProvider>
      <div className="film-grain" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Illustration />
        <DesignUX />
        <Branding />
        <Audiovisual />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  )
}

export default App
