import schoolData from "../data/schoolData"
import "../styles/highlights.css"

function Highlights() {
  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <div className="highlights-heading">
          <p className="section-label">Why Sarvodaya</p>

          <h2>
            A school rooted in
            <span> learning and community.</span>
          </h2>
        </div>

        <div className="highlights-list">
          {schoolData.highlights.map((highlight, index) => (
            <div className="highlight-item" key={highlight}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights