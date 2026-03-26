import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Portfolio from "./components/sections/Portfolio"
import Contact from "./components/sections/Contact"
import Experience from "./components/sections/Experience"
import Metrics from "./components/sections/Metrics"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics/>
      <About />
      <Skills />
      <Portfolio />
      <Experience/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App