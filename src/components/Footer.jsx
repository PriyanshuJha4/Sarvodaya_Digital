import schoolData from "../data/schoolData"
import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/school-logo.png"
            alt={`${schoolData.name} logo`}
          />

          <div>
            <strong>{schoolData.name}</strong>
            <span>{schoolData.location.address}</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#gallery">Gallery</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {schoolData.name}. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer