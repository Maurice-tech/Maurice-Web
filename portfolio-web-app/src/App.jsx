import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiences/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonails/Testimonials'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>   
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />


    </>
  )
}

export default App