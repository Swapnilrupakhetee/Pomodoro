import React from 'react'
import './Operations.css'
import { FaPlay } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Operations = () => {
  return (
    <div className="o-container">
     
      <div className="operations">
        <div className="time">
          <div className="timevalue">
            <span>25:00</span>
          </div>

        </div>
        <div className="o-buttons">
        <IoIosStats className='stats'/>
        <FaPlay className='play'/>
        <IoIosSettings className='settings'/>


        </div>
      </div>
      
    </div>
  )
}

export default Operations