import Container from "../layout/container"
import FadeIn from "../ui/FadeIn"

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-white border-t border-gray-900">
      <Container>

        <FadeIn>
          <div className="max-w-2xl">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let’s Work Together
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            I’m currently open to internship opportunities in data science,
            machine learning, and data analysis. If you have a project,
            collaboration, or opportunity in mind, feel free to reach out.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="mailto:ardinwinata12345@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/ardinwinata12345"
              className="px-6 py-3 border border-gray-700 rounded-md hover:border-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              className="px-6 py-3 border border-gray-700 rounded-md hover:border-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/in/ardin.rq"
              className="px-6 py-3 border border-gray-700 rounded-md hover:border-white transition"
            >
              Instagram
            </a>

          </div>

        </div>
        </FadeIn>

      </Container>
    </section>
  )
}