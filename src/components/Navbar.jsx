import { useState } from "react"
import schoolData from "../data/schoolData"
import schoolLogo from "../assets/optimized/school-logo.webp"
import "../styles/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={handleNavClick}>
          <img
            src={schoolLogo}
            alt={`${schoolData.name} logo`}
            className="navbar-logo"
          />

          <div className="navbar-school-info">
            <span className="navbar-school-name">
              Sarvodaya Public School
            </span>
            <span className="navbar-school-location">
              Khajauli, Madhubani
            </span>
          </div>
        </a>

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar