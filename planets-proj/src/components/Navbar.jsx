import React from 'react'
import { Link } from 'react-router-dom'
import { FaEarthAfrica } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="bar">
        <div className="logo">
            <h1>PLANETS <FaEarthAfrica/></h1>
        </div>
        <div className="display-menu">
            <Link className="menu" to={'/'}>Home</Link>
            <Link className="menu" to={'/Search'}>Search</Link>
            <Link className="menu" to={'/About'}>About</Link>
        </div>
    </div>
  )
}

export default Navbar