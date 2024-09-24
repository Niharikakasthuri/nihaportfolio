import React from 'react'
import Navigation from './Navigation'
import Home from './Home'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import About from './About'

const App = () => {
  return (
    <div>
      <Navigation/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App