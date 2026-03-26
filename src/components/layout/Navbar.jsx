import { useEffect, useState } from "react"
import Container from "./container"

export default function Navbar() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const linkClass = id =>
    `transition ${
      active === id ? "text-white" : "text-gray-400 hover:text-white"
    }`

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur border-b border-gray-900 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="font-semibold">Ardin</div>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#hero" className={linkClass("hero")}>Home</a>
            <a href="#skills" className={linkClass("skills")}>Skills</a>
            <a href="#portfolio" className={linkClass("portfolio")}>Projects</a>
            <a href="#experience" className={linkClass("experience")}>Experience</a>
            <a href="#contact" className={linkClass("contact")}>Contact</a>
          </div>
        </div>
      </Container>
    </nav>
  )
}