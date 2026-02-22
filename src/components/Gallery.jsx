import React from 'react';
import './Gallery.css';

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      caption: "Anime vibes forever 🌸",
      emoji: "🎌",
      color: "#FFD166"
    },
    {
      id: 2,
      caption: "Vintage memories 📷",
      emoji: "📸",
      color: "#F4A261"
    },
    {
      id: 3,
      caption: "Golden moments ✨",
      emoji: "⭐",
      color: "#FFE8CC"
    },
    {
      id: 4,
      caption: "Retro aesthetic 🌻",
      emoji: "🌼",
      color: "#FFD9B3"
    },
    {
      id: 5,
      caption: "Kawaii dreams 💫",
      emoji: "🌙",
      color: "#FFB4A2"
    },
    {
      id: 6,
      caption: "Sweet seventeen 🎂",
      emoji: "🎉",
      color: "#FFD166"
    }
  ];

  return (
    <section className="gallery section">
      <h2 className="section-title">Memory Gallery</h2>
      <p className="gallery-subtitle">A collection of beautiful moments & aesthetic vibes</p>
      
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div 
            className="gallery-item" 
            key={item.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="polaroid">
              <div className="photo-frame" style={{ background: `linear-gradient(135deg, ${item.color} 0%, #FFF4E0 100%)` }}>
                <div className="photo-placeholder">
                  <span className="photo-emoji">{item.emoji}</span>
                  <div className="photo-overlay">
                    <p className="overlay-text">Add your photo here!</p>
                  </div>
                </div>
              </div>
              <div className="polaroid-caption">
                <p>{item.caption}</p>
              </div>
              <div className="sticker sticker-star">⭐</div>
              <div className="sticker sticker-heart">💛</div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-decorations">
        <div className="deco-cassette">📼</div>
        <div className="deco-flower">🌸</div>
        <div className="deco-star">✨</div>
      </div>
    </section>
  );
}

export default Gallery;
