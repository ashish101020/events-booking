import React from 'react'
import logo from '../assest/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-links">
            <button className="nav-btn">Find Events</button>
            <button className="nav-btn">Venues</button>
            <button className="nav-btn">Tickets</button>

            <Link to="/my-bookings" className="nav-link">
              Bookings
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
