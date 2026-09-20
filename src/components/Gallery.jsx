import "../styles/gallery.css"

function Gallery() {
  const galleryItems = [
    {
      title: "School Campus",
      category: "Campus",
    },
    {
      title: "Classroom Activities",
      category: "Academics",
    },
    {
      title: "Student Activities",
      category: "Activities",
    },
    {
      title: "School Events",
      category: "Events",
    },
    {
      title: "Learning Environment",
      category: "Academics",
    },
    {
      title: "School Community",
      category: "Community",
    },
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <div>
            <p className="section-label">Gallery</p>

            <h2>
              Moments from
              <span> Sarvodaya.</span>
            </h2>
          </div>

          <p className="gallery-intro">
            A glimpse into school life, learning, activities and
            memorable moments.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
              <div className="gallery-placeholder">
                <span>{item.category}</span>
              </div>

              <div className="gallery-caption">
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