import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Knowmore from './components/knowmore/Knowmore'
import Contact from './components/contact/Contact'
import Chat from './components/chat/Chat'
import Atlantis from './components/atlantis/Atlantis'
import Growth from './components/growth/Growth'
import Amenities from './components/amenities/Amenities'
import Site from './components/sitelayout/Site'
import Fplan from './components/floor plans/Fplan'
import Prices from './components/prices/Prices'
import Customers from './components/customers/Customers'
import Premium from './components/Premium/Premium'
import Projects from './components/projects/Projects'
import Location from './components/location/Location'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer.js'

function App() {
    
  return (
    <div className='container-fluid p-0'>
        <Navbar/>
        <Carousel/>
        <Knowmore/>
        <Contact/>
        <Chat/>
        <Atlantis/>
        <Growth/>
        <Amenities/>
        <Site/>
        <Fplan/>
        <Prices/>
        <Customers/>
        <Premium/>
        <Projects/>
        <Location/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default App
