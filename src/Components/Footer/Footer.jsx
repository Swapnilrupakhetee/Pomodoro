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
          <a href='https://github.com/Swapnilrupakhetee'><FaGithub className='footer-icons'/></a>
          <a href='https://www.linkedin.com/in/swapnil-rupakhetee-a67a7a25a/'><FaLinkedinIn className='footer-icons'/></a>
          <a href='https://www.youtube.com/'><IoLogoYoutube className='footer-icons'/></a>
        </div>
        <div className="right-spotify">
          <iframe src="https://open.spotify.com/embed/track/1q8gelFgFYUwoWpQV7WNCe" width="400" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media">swd</iframe>

        </div>

      </div>
    </div>
  )
}

export default Footer