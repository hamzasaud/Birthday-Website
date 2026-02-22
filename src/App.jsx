import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import InteractiveButtons from './components/InteractiveButtons';
import Gallery from './components/Gallery';
import AgeCounter from './components/AgeCounter';
import FinalMessage from './components/FinalMessage';
import FloatingStars from './components/FloatingStars';
import Modal from './components/Modal';

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/birthday-song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log('Autoplay prevented. User interaction required.');
        setMusicPlaying(false);
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 300);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        audioRef.current.play();
        setMusicPlaying(true);
      }
    }
  };

  return (
    <div className="App">
      <FloatingStars />
      
      <HeroSection />
      
      <InteractiveButtons 
        openModal={openModal} 
        musicPlaying={musicPlaying}
        toggleMusic={toggleMusic}
      />
      
      <Gallery />
      
      <AgeCounter />
      
      <FinalMessage />
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        content={modalContent}
      />

      <button className="floating-music-btn" onClick={toggleMusic}>
        {musicPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  );
}

export default App;
