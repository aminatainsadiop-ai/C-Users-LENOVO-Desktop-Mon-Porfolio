import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Journey } from './sections/Journey'
import { Services } from './sections/Services'
import { Contact } from './sections/Contact'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="contenu" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
