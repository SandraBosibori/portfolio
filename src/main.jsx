import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/about/index.jsx'
import Skills from './components/skills/index.jsx'
import Contact from './pages/contact/index.jsx'
import Projects from './components/projects/index.jsx'
import Education from './components/education/index.jsx'
import Resume from './pages/resume/index.jsx'



const routes= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/skills',
    element: <Skills/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/education',
    element: <Education/>
  },
  {
    path: '/resume',
    element: <Resume/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
