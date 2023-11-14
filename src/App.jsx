import "./App.css"
import Home from "./components/home"
import Nav from "./components/nav"
import Projects from "./components/projects"
import About from "./components/about"
import Skills from "./components/skills"
import Education from "./components/education"

function App() {
  

  return (
    <section className="all">
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
    </section>
  )
}

export default App
