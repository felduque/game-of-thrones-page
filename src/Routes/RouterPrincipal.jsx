import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from '../Components/About/About.jsx'
// import Nav from '../Components/Nav/Nav.jsx'
import Home from '../Components/Home/Home.jsx'
import Cards from '../Components/Cards/Cards.jsx'

export default function RouterPrincipal () {

  const navigate = useNavigate()
  const [ access, setAccesss ] = useState(false);
  const username = 'felipe@gmail.com'
  const password = '6HVC7SJe19!$'

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccesss(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/')
  },[access])

  return (
    <Routes>
      {/* <Route path='/' element={<Nav />}  /> */}
      <Route path='/' element={<Home login={login} />} />
      <Route path='/home' element={<Cards />} />
      <Route  path='/about' element={<About />} />
    </Routes>
  )
}

