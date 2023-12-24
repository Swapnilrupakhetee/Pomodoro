import React, { useState, useEffect } from 'react';
import './Operations.css';
import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosStats, IoIosSettings } from "react-icons/io";
import alertSound from '../../alert.mp3'; // Import your sound file

const Operations = () => {
  const [sessionType, setSessionType] = useState('work');
  const [time, setTime] = useState(25 * 60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [newTimeInput, setNewTimeInput] = useState('');
  const [breaksTaken, setBreaksTaken] = useState(0);
  const [totalWorkTime, setTotalWorkTime] = useState(0); // Track total work time

  const sessionConfig = {
    work: 0.1 * 60,
    break: 0.2 * 60,
    longBreak: 15 * 60
  };

  const getSessionTime = (type) => sessionConfig[type] || 25 * 60;

  const audio = new Audio(alertSound); // Create an audio object with your sound file

  useEffect(() => {
    Notification.requestPermission(); // Request permission for notifications
  }, []);

  useEffect(() => {
    setTime(getSessionTime(sessionType));
  }, [sessionType]);

  useEffect(() => {
    let interval;
    if (isPlaying && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => {
          setTotalWorkTime(prevTotal => prevTotal + 1);
          return prevTime - 1;
        });
      }, 1000);
    } else if (time === 0) {
      setTotalWorkTime(prevTotal => prevTotal + 1);

      // Play the sound
      audio.play();

      // Show browser notification
      if (Notification.permission === 'granted') {
        new Notification('Time is up!', {
          body: `Your ${sessionType} session has ended.`
        });
      }

      // Reset the timer to its original duration and pause it
      setTime(getSessionTime(sessionType));
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, time, sessionType]);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const handleTimeChange = (e) => {
    e.preventDefault();
    setTime(parseInt(newTimeInput, 10) * 60);
    closeSettings();
  };

  const showStats = () => {
    alert(`Total Work Time: ${totalWorkTime} seconds`);
  };

  return (
    <div className="o-container">
      <div className="operations">
        <div className="time">
          <div className="timevalue">
            <span>{Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}</span>
          </div>
          <div className="session-type">
            {sessionType}
          </div>
          <div className="work-sessions-completed">
            Work Sessions Completed: {breaksTaken}
          </div>
        </div>
        <div className="o-buttons">
          <IoIosStats className='stats' onClick={showStats} />
          {isPlaying ? (
            <FaPause className='play' onClick={togglePlayPause} />
          ) : (
            <FaPlay className='play' onClick={togglePlayPause} />
          )}
          <IoIosSettings className='settings' onClick={openSettings} />
        </div>

        <div className="session-controls">
          <button onClick={() => setSessionType('work')}>Work</button>
          <button onClick={() => setSessionType('break')}>Break</button>
          <button onClick={() => setSessionType('longBreak')}>Long Break</button>
        </div>
      </div>

      {showSettings && (
        <div className="settings-modal">
          <h2>Set Timer Duration</h2>
          <form onSubmit={handleTimeChange}>
            <input 
              type="number" 
              value={newTimeInput} 
              onChange={(e) => setNewTimeInput(e.target.value)} 
              placeholder="Enter duration in minutes"
              required 
            />
            <button type="submit">Set</button>
            <button type="button" onClick={closeSettings}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Operations;
