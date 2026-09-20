import "../styles/events.css"

function Events() {
  const events = [
    {
      date: "01",
      month: "Coming Soon",
      title: "School Events",
      description:
        "Important school events, celebrations and activities will be announced here.",
    },
    {
      date: "02",
      month: "Updates",
      title: "Academic Activities",
      description:
        "Updates about classroom activities, competitions and student participation.",
    },
    {
      date: "03",
      month: "Updates",
      title: "School Announcements",
      description:
        "Important notices and announcements for students and parents.",
    },
  ]

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-heading">
          <p className="section-label">News & Events</p>

          <h2>
            What's happening at
            <span> Sarvodaya.</span>
          </h2>
        </div>

        <div className="events-list">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-date">
                <strong>{event.date}</strong>
                <span>{event.month}</span>
              </div>

              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>

              <span className="event-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events