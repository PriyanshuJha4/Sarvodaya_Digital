import schoolData from "../data/schoolData"
import "../styles/contact.css"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label">Contact</p>

          <h2>
            Get in touch with
            <span> Sarvodaya.</span>
          </h2>

          <p>
            For admissions, school-related information, or general
            enquiries, contact the school directly.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href={`tel:${schoolData.contact.phone}`}
          >
            <span className="contact-label">Phone</span>
            <strong>{schoolData.contact.phone}</strong>
          </a>

          <a
            className="contact-card"
            href={`mailto:${schoolData.contact.email}`}
          >
            <span className="contact-label">Email</span>
            <strong>{schoolData.contact.email}</strong>
          </a>

          <a
            className="contact-card"
            href={schoolData.location.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-label">Visit Us</span>
            <strong>{schoolData.location.address}</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact