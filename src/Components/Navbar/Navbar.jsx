import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-items">
            <div className="navbar-left">LOGO</div>
            <div className="navbar-right">
                <span className='buttons'>LOGIN</span>
                <span className='burger'>Hamburger</span>
                </div>
        </div>
    </div>
  )
}

export default Navbar