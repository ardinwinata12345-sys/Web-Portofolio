import Container from "../layout/container"
import FadeIn from "../ui/FadeIn"

export default function Skills() {
  return (
    <section 
      id="skills" className="py-32 bg-black text-white border-t border-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Skills
        </h2>
            
            <div className="mt-16 space-y-16">

            <FadeIn>
              {/* Programming */}
            <div>
                <h3 className="text-lg text-gray-500 uppercase tracking-widest">
                Programming
                </h3>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Python", "JavaScript", "SQL", "R"].map((skill, index) => (
                    <div
                    key={index}
                    className="border border-gray-800 rounded-lg p-5 hover:border-white hover:-translate-y-2 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                    >
                    <p className="text-gray-300 font-medium">{skill}</p>
                    </div>
                ))}
                </div>
            </div>
            </FadeIn>

            <FadeIn>
            {/* Data & ML */}
            <div>
                <h3 className="text-lg text-gray-500 uppercase tracking-widest">
                Data & Machine Learning
                </h3>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"].map((skill, index) => (
                    <div
                    key={index}
                    className="border border-gray-800 rounded-lg p-5 hover:border-white hover:-translate-y-2 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                    >
                    <p className="text-gray-300 font-medium">{skill}</p>
                    </div>
                ))}
                </div>
            </div>
            </FadeIn>

            <FadeIn>
            {/* Tools */}
            <div>
                <h3 className="text-lg text-gray-500 uppercase tracking-widest">
                Tools
                </h3>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Git", "GitHub", "Jupyter", "VS Code"].map((skill, index) => (
                    <div
                    key={index}
                    className="border border-gray-800 rounded-lg p-5 hover:border-white hover:-translate-y-2 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
                    >
                    <p className="text-gray-300 font-medium">{skill}</p>
                    </div>
                ))}
                </div>
            </div>
            </FadeIn>

            </div>
      </Container>
    </section>
  )
}