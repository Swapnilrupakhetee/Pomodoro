import React from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoGitlab } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-items">
            <div className="navbar-left"><IoLogoGitlab className='logo' /></div>
            <div className="navbar-right">
                <span className='buttons'>LOGIN</span>
                <span className='burger'><RxHamburgerMenu className='burger-img'/></span>
                </div>
        </div>
    </div>
  )
}

export default Navbar