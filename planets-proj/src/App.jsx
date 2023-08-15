import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => 
{
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App