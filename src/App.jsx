import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Project from './components/project/Project'
import Acheivements from './components/acheivements/Acheivements'
import Contect from './components/contect/Contect'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Project/>
      <Acheivements/>
      <Contect/>
      <Footer/>
    </>
  )
}

export default App
