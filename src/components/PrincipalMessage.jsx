import schoolData from "../data/schoolData"
import principalPhoto from "../assets/principal.jpg"
import "../styles/principal.css"

function PrincipalMessage() {
  return (
    <section className="principal-section">
      <div className="principal-container">
        <div className="principal-photo">
          <img
            src={principalPhoto}
            alt={`Principal ${schoolData.principal.name}`}
          />
        </div>

        <div className="principal-content">
          <p className="section-label">Principal's Message</p>

          <h2>
            Education that builds
            <span> knowledge and character.</span>
          </h2>

          <blockquote>
            “Our aim is to provide every child with a strong
            educational foundation, a positive learning environment,
            and the confidence to grow into a responsible individual.”
          </blockquote>

          <div className="principal-info">
            <strong>{schoolData.principal.name}</strong>
            <span>Principal, {schoolData.name}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalMessage