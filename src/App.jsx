import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Academics from "./components/Academics"
import Highlights from "./components/Highlights"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Highlights />
      </main>
    </>
  )
}

export default App