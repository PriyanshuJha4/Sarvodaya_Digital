import { useState } from "react"
import galleryData from "../data/galleryData"
import "../styles/gallery.css"

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const closeLightbox = () => {
    setSelectedImage(null)
  }

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
            <article
              className="gallery-card"
              key={item.id}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage(item)
                }
              }}
            >
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

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery