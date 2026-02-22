import React, { useState } from 'react';
import './FinalMessage.css';
import confetti from 'canvas-confetti';

function FinalMessage() {
  const [hugged, setHugged] = useState(false);

  const handleHug = () => {
    setHugged(true);

    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD166', '#F4A261', '#E76F51', '#FFF4E0', '#FFB4A2', '#FF69B4']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD166', '#F4A261', '#E76F51', '#FFF4E0', '#FFB4A2', '#FF69B4']
      });
    }, 50);

    setTimeout(() => setHugged(false), 2000);
  };

  return (
    <section className="final-message section">
      <div className="message-container">
        <div className="handwritten-box">
          <div className="paper-texture"></div>
          
          <div className="message-content">
            <h2 className="message-title">A Special Note For You 💛</h2>
            
            <div className="handwritten-text">
              <p>
                May your 17th year be full of anime marathons, 
                laughter, and golden memories.
              </p>
              <p>
                Keep being the amazing, unique, and wonderful person you are.
              </p>
              <p>
                The world is brighter with you in it! ✨
              </p>
            </div>

            <div className="signature">
              <p>With love & sparkles,</p>
              <p className="signature-name">Your Biggest Fan 🌸</p>
            </div>
          </div>

          <div className="decorative-elements">
            <div className="tape tape-top-left"></div>
            <div className="tape tape-top-right"></div>
            <div className="doodle doodle-heart">💛</div>
            <div className="doodle doodle-star">⭐</div>
            <div className="doodle doodle-flower">🌸</div>
          </div>
        </div>

        <button 
          className={`hug-button ${hugged ? 'hugged' : ''}`}
          onClick={handleHug}
        >
          <span className="hug-icon">🤗</span>
          <span className="hug-text">
            {hugged ? 'Hugged! 💕' : 'Send Virtual Hug'}
          </span>
        </button>

        <div className="footer-decorations">
          <div className="footer-item">🎂</div>
          <div className="footer-item">🎉</div>
          <div className="footer-item">🎈</div>
          <div className="footer-item">✨</div>
          <div className="footer-item">💫</div>
        </div>

        <p className="copyright">
          Made with 💛 for an amazing 17-year-old
        </p>
      </div>
    </section>
  );
}

export default FinalMessage;
