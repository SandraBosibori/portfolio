import "./App.css"
import Home from "./components/home"
import Nav from "./components/nav"
import Projects from "./components/projects"
import About from "./pages/about"
import Skills from "./pages/skills"

function App() {
  

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
