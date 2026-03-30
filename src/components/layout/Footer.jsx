import Container from "./Container"

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 text-gray-400">
      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm">
            © {new Date().getFullYear()} Ardin Winata. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="https://github.com/yourusername" className="hover:text-white transition">
              GitHub
            </a>

            <a href="https://linkedin.com/in/yourusername" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="mailto:youremail@gmail.com" className="hover:text-white transition">
              Email
            </a>
          </div>

        </div>

      </Container>
    </footer>
  )
}