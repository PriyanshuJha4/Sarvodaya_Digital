import schoolData from "../data/schoolData"
import "../styles/about.css"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-label">About Our School</p>

          <h2>
            Building strong foundations for
            <span> lifelong learning.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              {schoolData.name} was established in{" "}
              <strong>{schoolData.established}</strong> and provides
              English-medium education from{" "}
              <strong>{schoolData.academics.classes}</strong>.
            </p>

            <p>
              As a co-educational private school, we focus on strong
              foundational learning, meaningful classroom interaction,
              and the overall development of students.
            </p>

            <p>
              Our approach emphasizes focused teacher-student
              interaction, active participation, and an environment
              where students can build confidence and a strong academic
              foundation.
            </p>
          </div>

          <div className="about-facts">
            <div className="about-fact">
              <span className="about-fact-number">
                {schoolData.established}
              </span>
              <span className="about-fact-label">
                Established
              </span>
            </div>

            <div className="about-fact">
              <span className="about-fact-number">Nursery–8</span>
              <span className="about-fact-label">
                Classes
              </span>
            </div>

            <div className="about-fact">
              <span className="about-fact-number">
                English
              </span>
              <span className="about-fact-label">
                Medium of Instruction
              </span>
            </div>

            <div className="about-fact">
              <span className="about-fact-number">
                Co-ed
              </span>
              <span className="about-fact-label">
                School
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About