import React from 'react';
import './Gallery.css';

// Import your images here
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      caption: "Anime vibes forever 🌸",
      image: photo1,
      color: "#FFD166"
    },
    {
      id: 2,
      caption: "Vintage memories 📷",
      image: photo2,
      color: "#F4A261"
    },
    {
      id: 3,
      caption: "Golden moments ✨",
      image: photo3,
      color: "#FFE8CC"
    },
    {
      id: 4,
      caption: "Retro aesthetic 🌻",
      image: photo4,
      color: "#FFD9B3"
    },
    {
      id: 5,
      caption: "Kawaii dreams 💫",
      image: photo5,
      color: "#FFB4A2"
    },
    {
      id: 6,
      caption: "Sweet seventeen 🎂",
      image: photo6,
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
              <div className="photo-frame">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="gallery-photo"
                />
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
