import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="bar">
        <Link className="logo" to={'/'}>planets</Link>

        <div className="display-menu">
            <Link className="menu" to={'/'}>home</Link>
            <Link className="menu" to={'/Search'}>search</Link>
            <Link className="menu" to={'/About'}>about</Link>
        </div>
    </div>
  )
}

export default Navbar