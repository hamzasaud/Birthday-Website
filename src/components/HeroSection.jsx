import React, { useState } from 'react';
import './HeroSection.css';
import confetti from 'canvas-confetti';

function HeroSection() {
  const [surprised, setSurprised] = useState(false);

  const handleSurprise = () => {
    setSurprised(true);
    
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFD166', '#F4A261', '#E76F51', '#FFF4E0', '#FFB4A2']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFD166', '#F4A261', '#E76F51', '#FFF4E0', '#FFB4A2']
      });
    }, 250);

    setTimeout(() => setSurprised(false), 3000);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="anime-decoration top-left">✨</div>
        <div className="anime-decoration top-right">🌸</div>
        <div className="anime-decoration bottom-left">💫</div>
        <div className="anime-decoration bottom-right">⭐</div>
        
        <div className="hero-illustration">
          <div className="illustration-placeholder">
            <div className="anime-girl">
              <div className="head">
                <div className="face">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                  <div className="blush left-blush"></div>
                  <div className="blush right-blush"></div>
                  <div className="mouth"></div>
                </div>
              </div>
              <div className="body"></div>
              <div className="crown">👑</div>
            </div>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="title-line">Happy 17th Birthday,</span>
          <span className="name-highlight">Bunga!</span>
        </h1>
        
        <p className="hero-subtitle">
          You're officially 17 — still young, still legendary 🌻
        </p>

        <button 
          className={`surprise-button ${surprised ? 'surprised' : ''}`}
          onClick={handleSurprise}
        >
          <span className="button-text">Click for a Surprise</span>
          <span className="button-icon">🎁</span>
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}

export default HeroSection;
