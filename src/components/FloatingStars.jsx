import React, { useEffect, useState } from 'react';
import './FloatingStars.css';

function FloatingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starEmojis = ['✨', '⭐', '💫', '🌟', '⚡'];
    const generatedStars = [];

    for (let i = 0; i < 20; i++) {
      generatedStars.push({
        id: i,
        emoji: starEmojis[Math.floor(Math.random() * starEmojis.length)],
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        animationDelay: Math.random() * 5,
        size: 0.8 + Math.random() * 0.7
      });
    }

    setStars(generatedStars);
  }, []);

  return (
    <div className="floating-stars">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
            fontSize: `${star.size}rem`
          }}
        >
          {star.emoji}
        </div>
      ))}
    </div>
  );
}

export default FloatingStars;
