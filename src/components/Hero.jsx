import schoolData from "../data/schoolData"
import schoolLogo from "../assets/school-logo.png"
import "../styles/hero.css"

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-location">
            Khajauli, Madhubani, Bihar
          </p>

          <h1 className="hero-title">
            {schoolData.name}
          </h1>

          <p className="hero-motto">
            {schoolData.motto}
          </p>

          <p className="hero-description">
            A co-educational English-medium school committed to
            building strong foundations through focused learning,
            active participation, and character development.
          </p>

          <div className="hero-actions">
            <a href="#about" className="hero-button hero-button-primary">
              Explore Our School
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-logo-wrapper">
          <div className="hero-logo-glow"></div>

          <img
            src={schoolLogo}
            alt={`${schoolData.name} official logo`}
            className="hero-logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero