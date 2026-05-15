import React, { useState } from 'react';

const Envelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Total animation time: Flap opens (0.5s) + Letter up (1s) + Fade out (1s)
    setTimeout(() => {
      onOpen();
    }, 2500);
  };

  return (
    <div className={`envelope-overlay ${isOpening ? 'fade-out' : ''}`}>
      <div className={`envelope-wrapper ${isOpening ? 'open' : ''}`} onClick={handleOpen}>
        <div className="envelope-back"></div>
        <div className="envelope-letter">
          <p className="gold-script" style={{ fontSize: '2rem', margin: 0, lineHeight: 1.2 }}>
            Belén <br/>&<br/> Ricardo
          </p>
        </div>
        <div className="envelope-front"></div>
        <div className="envelope-flap"></div>
        <div className="envelope-seal">
          B&R
        </div>
      </div>
      <div className="envelope-hint">
        Haz clic para abrir
      </div>
    </div>
  );
};

export default Envelope;
