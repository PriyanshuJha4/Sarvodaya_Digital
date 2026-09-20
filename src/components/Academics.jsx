import schoolData from "../data/schoolData"
import "../styles/academics.css"

function Academics() {
  const academicFeatures = [
    {
      title: "English-Medium Education",
      description:
        "A structured English-medium learning environment designed to build strong academic foundations.",
    },
    {
      title: "Nursery to Class 8",
      description:
        "Educational support from early childhood through upper-primary level.",
    },
    {
      title: "Focused Class Interaction",
      description:
        "Controlled class sizes encourage participation, individual attention, and direct doubt-solving.",
    },
    {
      title: "Foundational Learning",
      description:
        "A learning environment supported by foundational classrooms and an on-site library.",
    },
  ]

  return (
    <section id="academics" className="academics-section">
      <div className="academics-container">
        <div className="academics-header">
          <p className="section-label">Academics</p>

          <h2>
            Learning that builds a
            <span> strong foundation.</span>
          </h2>

          <p className="academics-intro">
            {schoolData.name} provides co-educational English-medium
            education from Nursery to Class 8, with an emphasis on
            foundational learning and meaningful classroom interaction.
          </p>
        </div>

        <div className="academics-grid">
          {academicFeatures.map((feature, index) => (
            <article className="academic-card" key={feature.title}>
              <span className="academic-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academics