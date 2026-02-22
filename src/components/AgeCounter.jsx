import React, { useState, useEffect } from 'react';
import './AgeCounter.css';

function AgeCounter() {
  const birthDate = new Date('2009-03-11T00:00:00');
  
  const [timeData, setTimeData] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();
      const diff = now - birthDate;
      
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const years = Math.floor(days / 365.25);
      
      setTimeData({
        years,
        days: days - Math.floor(years * 365.25),
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
        totalSeconds: seconds
      });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="age-counter section">
      <div className="counter-container">
        <h2 className="counter-title">You Are...</h2>
        
        <div className="counter-display">
          <div className="counter-item">
            <div className="counter-value">{timeData.years}</div>
            <div className="counter-label">Years</div>
          </div>
          
          <div className="counter-separator">+</div>
          
          <div className="counter-item">
            <div className="counter-value">{timeData.days}</div>
            <div className="counter-label">Days</div>
          </div>
          
          <div className="counter-separator">+</div>
          
          <div className="counter-item">
            <div className="counter-value">{timeData.hours}</div>
            <div className="counter-label">Hours</div>
          </div>
          
          <div className="counter-separator">+</div>
          
          <div className="counter-item">
            <div className="counter-value">{timeData.minutes}</div>
            <div className="counter-label">Minutes</div>
          </div>
          
          <div className="counter-separator">+</div>
          
          <div className="counter-item">
            <div className="counter-value">{timeData.seconds}</div>
            <div className="counter-label">Seconds</div>
          </div>
        </div>

        <div className="total-seconds">
          <p className="awesome-text">
            = <span className="highlight-number">{timeData.totalSeconds.toLocaleString()}</span> seconds of being
          </p>
          <h3 className="awesome-word">AWESOME! ✨</h3>
        </div>

        <div className="counter-decorations">
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">💫</div>
          <div className="sparkle sparkle-3">⭐</div>
          <div className="sparkle sparkle-4">🌟</div>
        </div>
      </div>
    </section>
  );
}

export default AgeCounter;
