import React, { useState } from 'react';
import './Valentine.css';

const Valentine = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isProposalAnswered, setIsProposalAnswered] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
  };

  const handleNoButtonHover = (e) => {
    // Generate random position within the window
    const maxX = window.innerWidth - 100; // Subtract button width
    const maxY = window.innerHeight - 50; // Subtract button height

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setIsProposalAnswered(true);
  };

  return (
    <div className="valentine-container">
      {/* Navigation Bar */}
      <div className="section-tabs">
        <button className="active">Valentine's Proposal</button>
      </div>

      {/* Main Content */}
      <div className="valentine-content">
        {!isEnvelopeOpen && (
          <div 
            className="envelope" 
            onClick={handleEnvelopeClick}
          >
            💌
          </div>
        )}

        {isEnvelopeOpen && !isProposalAnswered && (
          <div className="love-letter">
            <h2>My Dearest Urja,</h2>
            <p>
              From the moment we met, you've brought an indescribable light into my life. Your smile brightens my darkest days, and your laughter is my favorite melody. Every moment with you feels like a beautiful adventure – from our late-night talks to our silly inside jokes. You're not just my partner, but my best friend, my confidant, and the person who makes my world complete. Your kindness, your spirit, and your incredible heart make me fall in love with you more and more each day.
            </p>
            <div className="proposal-buttons">
              <button 
                className="yes-button" 
                onClick={handleYesClick}
              >
                Yes, I'll be your Valentine! 💖
              </button>
              <button 
                className="no-button" 
                style={{
                  position: 'absolute',
                  left: `${noButtonPosition.x}px`,
                  top: `${noButtonPosition.y}px`
                }}
                onMouseEnter={handleNoButtonHover}
              >
                No
              </button>
            </div>
          </div>
        )}

        {isProposalAnswered && (
          <div className="acceptance-message">
            <h2>Thank you for being my valentine.</h2>
              <h1>I LOVE YOU 💕</h1> 
            <div className="rose-footer">🌹</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Valentine;