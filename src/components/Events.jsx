import eventsData from "../data/eventsData"
import "../styles/events.css"

function Events() {
  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-heading">
          <p className="section-label">Events & Activities</p>

          <h2>
            Moments that make
            <span> school life memorable.</span>
          </h2>

          <p>
            Stay updated with activities, programmes, and events
            at Sarvodaya Public School.
          </p>
        </div>

        <div className="events-grid">
          {eventsData.map((event) => (
            <article className="event-card" key={event.id}>
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                />
              ) : (
                <div className="event-image-placeholder">
                  Coming Soon
                </div>
              )}

              <div className="event-content">
                <span className="event-date">
                  {event.date}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events