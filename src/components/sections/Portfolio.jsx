import Container from "../layout/Container"
import FadeIn from "../ui/FadeIn"

export default function Portfolio() {
  return (
    <section className="py-32 bg-black text-white border-t border-gray-900">
      <Container>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Portfolio
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Customer Churn Prediction",
              problem: "Telecom companies struggle to identify customers likely to leave.",
              approach: "Performed EDA, feature engineering, and trained Logistic Regression and Random Forest models.",
              result: "Achieved 85% accuracy in predicting churn using cross-validated model evaluation.",
              description:
                "Built a machine learning model to predict customer churn using Logistic Regression and Random Forest.",
              tech: ["Python", "Pandas", "Scikit-Learn"],
              link: "#"
            },
            {
              title: "Sentiment Analysis on Social Media",
              approach: "Performed EDA, feature engineering, and trained Logistic Regression and Random Forest models.",
              result: "Achieved 85% accuracy in predicting churn using cross-validated model evaluation.",
              description:
                "Performed text preprocessing and trained classification models to analyze sentiment trends.",
              tech: ["Python", "NLP", "TensorFlow"],
              link: "#"
            },
          ].map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-8 hover:border-white hover:-translate-y-2 transition-all duration-300"
            >


              <h3 className="text-xl font-semibold">{project.title}</h3>
              
              <p className="mt-4 text-gray-300">
                <span className="text-gray-500">Problem:</span> {project.problem}
              </p>

              <p className="mt-4 text-gray-300">
                <span className="text-gray-500">Approach:</span> {project.approach}
              </p>

              <p className="mt-4 text-gray-300">
                <span className="text-gray-500">Result:</span> {project.result}
              </p>
            
              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-6 text-sm text-gray-400 hover:text-white transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
        </FadeIn>
      </Container>
    </section>
  )
}