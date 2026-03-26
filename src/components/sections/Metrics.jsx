import Container from "../layout/container"
import FadeIn from "../ui/FadeIn"

export default function Metrics() {
  return (
    <section id="matrics" className="py-32 text-white border-t border-gray-900">
      <Container>
        <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
                { value: "5+", label: "ML Projects Completed" },
                { value: "10+", label: "Datasets Analyzed" },
                { value: "3+", label: "Algorithms Mastered" },
                { value: "100K+", label: "Rows of Data Processed" },
            ].map((item, index) => (
                <div key={index}>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {item.value}
                </h3>
                <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest">
                    {item.label}
                </p>
                </div>
            ))}
                
            </div>
        </FadeIn>
      </Container>
    </section>
  )
}
