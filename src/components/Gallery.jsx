import galleryData from "../data/galleryData"
import "../styles/gallery.css"

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-heading">
          <p className="section-label">Gallery</p>

          <h2>
            Life at
            <span> Sarvodaya.</span>
          </h2>

          <p>
            A glimpse into our school campus, classrooms,
            activities, and events.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryData.map((item) => (
            <article className="gallery-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery