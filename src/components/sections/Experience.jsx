import Container from "../layout/Container"
import FadeIn from "../ui/FadeIn"

export default function Experience() {
  return (
    <section id="experience" className="py-32 text-white border-t border-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Experience
        </h2>

        <FadeIn>
          <div className="mt-16 space-y-16">

          {/* Item 1 */}
          <div className="relative pl-8 border-l border-gray-800">
            <div className="absolute -left-2 top-2 w-4 h-4 bg-white rounded-full"></div>

            <h3 className="text-xl font-semibold">
              Data Analysis Project — Academic
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              2024
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Conducted exploratory data analysis on structured datasets,
              performed data cleaning, visualization, and built predictive models
              using Python and Scikit-Learn.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative pl-8 border-l border-gray-800">
            <div className="absolute -left-2 top-2 w-4 h-4 bg-white rounded-full"></div>

            <h3 className="text-xl font-semibold">
              Machine Learning Study & Implementation
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              2023 – Present
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Focused on supervised learning algorithms, model evaluation,
              and performance optimization while working on personal ML projects.
            </p>
          </div>

        </div>
        </FadeIn>
      </Container>
    </section>
  )
}