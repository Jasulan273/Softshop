import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recented from './components/Recented/Recented'
import Banner from './components/Banner/Banner'
import Contacts from './components/Contacts/Contacts'
import Advertisment from './components/Advertisment/Advertisment'
import About from './components/AboutUs/About'
import Footer from './components/Footer/Footer'

import 'boxicons'
function App() {


  return (
    <div className="App">
      <Header />
      <Recented />
      <Banner />
      <Advertisment />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
