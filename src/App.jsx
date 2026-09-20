import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Academics from "./components/Academics"
import Highlights from "./components/Highlights"
import Gallery from "./components/Gallery"
import Events from "./components/Events"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Highlights />
        <Gallery />
        <Events />
      </main>
    </>
  )
}

export default App