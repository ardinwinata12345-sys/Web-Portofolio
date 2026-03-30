import Container from "../layout/Container"

export default function Hero() {
  return (
<section id="hero" className="min-h-screen flex items-center bg-black text-white pt-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-black opacity-80"></div>
      <Container>
  <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Data Scientist in Progress.
          </h1>

          <p className="mt-5 text-xl text-gray-300 max-w-2xl leading-relaxed">
            Transforming raw data into meaningful insights and predictive solutions
            using machine learning and statistical modeling.
          </p>

          <p>
            ....
          </p>
          
          <p className="text-l uppercase tracking-widest text-gray-500">
            Ardin Winata — Computer Science Student
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-400 transition">
              View Portfolio
            </button>

            <button className="px-6 py-3 border border-gray-700 rounded-md hover:border-white transition-all duration-500">
              Contact Me  
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}