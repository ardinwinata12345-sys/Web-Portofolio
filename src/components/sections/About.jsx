import Container from "../layout/Container"
import FadeIn from "../ui/FadeIn"

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-white border-t border-gray-900">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <FadeIn>
            
          <p className="mt-8 text-gray-300 leading-relaxed text-lg">
            I am a Computer Science student focused on frontend development,
            passionate about building clean, responsive, and scalable web
            applications using modern technologies.
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            I enjoy turning complex problems into simple, beautiful, and
            intuitive digital experiences. Currently seeking internship
            opportunities to grow and contribute in a professional environment.
          </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}