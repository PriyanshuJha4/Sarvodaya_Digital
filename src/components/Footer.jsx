import schoolData from "../data/schoolData"
import socialData from "../data/socialData"
import schoolLogo from "../assets/optimized/school-logo.webp"
import "../styles/footer.css"

function Footer() {
  const socialLinks = [
    { name: "Instagram", url: socialData.instagram },
    { name: "Facebook", url: socialData.facebook },
    { name: "YouTube", url: socialData.youtube },
  ].filter((social) => social.url)

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src={schoolLogo}
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

        {socialLinks.length > 0 && (
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        )}

        <p className="footer-copy">
          © {new Date().getFullYear()} {schoolData.name}. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer