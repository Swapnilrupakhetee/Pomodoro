import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className='f-container'>
      <div className="footer-items">
        <div className="left-icons">
          <FaGithub className='footer-icons'/>
          <FaLinkedinIn className='footer-icons'/>
          <IoLogoYoutube className='footer-icons'/>
        </div>
        <div className="right-spotify">
          <iframe src="https://open.spotify.com/embed/track/1q8gelFgFYUwoWpQV7WNCe" width="400" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media">swd</iframe>

        </div>

      </div>
    </div>
  )
}

export default Footer