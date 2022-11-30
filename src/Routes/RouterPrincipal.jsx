import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from '../Components/About/About.jsx'
import Nav from '../Components/Nav/Nav.jsx'
import Home from '../Components/Home/Home.jsx'
import Cards from '../Components/Cards/Cards.jsx'

export default function RouterPrincipal () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav />}  />
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Cards />} />
      <Route  path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

