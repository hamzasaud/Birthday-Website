import React from 'react';
import './InteractiveButtons.css';

function InteractiveButtons({ openModal, musicPlaying, toggleMusic }) {
  const awesomeReasons = (
    <div className="modal-content-wrapper">
      <h2>Why You're Absolutely Awesome ✨</h2>
      <ul className="awesome-list">
        <li>🌟 Your smile lights up every room you enter</li>
        <li>💖 You have the kindest heart and always care for others</li>
        <li>🎨 Your creativity and unique style inspire everyone</li>
        <li>🌸 You're brave enough to be yourself, always</li>
        <li>✨ Your laugh is contagious and brings joy to everyone</li>
        <li>🌻 You make the world a better place just by being in it</li>
        <li>💫 Your determination and strength are incredible</li>
        <li>🎭 You're talented in so many ways it's amazing</li>
        <li>🌈 You bring color and happiness wherever you go</li>
        <li>⭐ You're simply irreplaceable and one of a kind</li>
      </ul>
    </div>
  );

  const birthdayWishes = (
    <div className="modal-content-wrapper wishes-content">
      <h2>Birthday Wishes Just For You 🎂</h2>
      <div className="wish-card">
        <p className="wish-text">May this year bring you endless adventures and beautiful memories! 🌟</p>
      </div>
      <div className="wish-card">
        <p className="wish-text">Here's to 17 years of being amazing and many more to come! 🎉</p>
      </div>
      <div className="wish-card">
        <p className="wish-text">May all your anime marathons be binge-worthy and your snacks always delicious! 🍿</p>
      </div>
      <div className="wish-card">
        <p className="wish-text">Wishing you a year filled with laughter, love, and legendary moments! 💛</p>
      </div>
      <div className="wish-card">
        <p className="wish-text">May your 17th year be your best chapter yet! 📖✨</p>
      </div>
    </div>
  );

  const secretMessage = (
    <div className="modal-content-wrapper secret-content">
      <h2>Secret Message Unlocked 🔓</h2>
      <div className="secret-box">
        <p className="secret-text typewriter">
          You are loved more than you know, appreciated more than you realize, 
          and you deserve all the happiness in the world. Never forget how special you are! 
          Keep shining bright, because the world needs your light. 💫
        </p>
        <p className="secret-signature">— Someone who thinks you're incredible</p>
      </div>
    </div>
  );

  const handleMusicClick = () => {
    toggleMusic();
    const musicContent = (
      <div className="modal-content-wrapper music-content">
        <h2>{musicPlaying ? '🎵 Music Playing!' : '🎵 Music Paused'}</h2>
        <div className="music-player">
          <div className="vinyl-record">
            <div className="vinyl-center"></div>
          </div>
          <p className="music-note">
            {musicPlaying 
              ? "Imagine your favorite song playing right now! 🎶" 
              : "Click 'Play Music' again to resume! 🎵"}
          </p>
          <p className="music-hint">
            (Add your favorite birthday song file to make this interactive!)
          </p>
        </div>
      </div>
    );
    openModal(musicContent);
  };

  return (
    <section className="interactive-buttons section">
      <h2 className="section-title">Explore Your Birthday Surprises</h2>
      
      <div className="buttons-grid">
        <button 
          className="interactive-btn btn-awesome"
          onClick={() => openModal(awesomeReasons)}
        >
          <span className="btn-icon">⭐</span>
          <span className="btn-text">Why You're Awesome</span>
          <div className="btn-shine"></div>
        </button>

        <button 
          className="interactive-btn btn-wishes"
          onClick={() => openModal(birthdayWishes)}
        >
          <span className="btn-icon">🎂</span>
          <span className="btn-text">Birthday Wishes</span>
          <div className="btn-shine"></div>
        </button>

        <button 
          className="interactive-btn btn-secret"
          onClick={() => openModal(secretMessage)}
        >
          <span className="btn-icon">🔒</span>
          <span className="btn-text">Secret Message</span>
          <div className="btn-shine"></div>
        </button>

        <button 
          className="interactive-btn btn-music"
          onClick={handleMusicClick}
        >
          <span className="btn-icon">{musicPlaying ? '⏸️' : '🎵'}</span>
          <span className="btn-text">Play Music</span>
          <div className="btn-shine"></div>
        </button>
      </div>
    </section>
  );
}

export default InteractiveButtons;
